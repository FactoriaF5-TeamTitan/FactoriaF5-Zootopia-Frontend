import { mount } from '@vue/test-utils';
import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import AnimalCard from '@/components/dashboard/CardDashboard.vue';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { nextTick } from 'vue';


describe("AnimalCard", () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('debería mostrar la lista de animales después de cargar los datos', async () => {
    const data = [
      { id: 1, family: 'Félidos', count: 14 },
      { id: 2, family: 'Cánidos', count: 12 },
    ];

    mock.onGet('/api/v1/animals/data').reply(200, data);

    const wrapper = mount(AnimalCard);

    await nextTick();

    expect(wrapper.findAll('li').length).toBe(data.length);
  });

  it('debería manejar errores en la solicitud de datos', async () => {
    mock.onGet('/api/v1/animals/data').reply(404);

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    window.alert = vi.fn();

    await nextTick();

    expect(consoleSpy).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('There was a problem with the data request');
    
    consoleSpy.mockRestore();
  });

  it('debería mostrar "Total animals:" en el título de la tarjeta', () => {
    const wrapper = mount(AnimalCard);
    const title = wrapper.find('h5.card-title');
    expect(title.text()).toBe('Total animals:');
  });

  it('debería tener un boton para "Add Animal"', () => {
    const wrapper = mount(AnimalCard);
    const buttons = wrapper.find('button.btn-primary');
    expect(wrapper.find('button.btn-primary').exists()).toBe(true);
    expect(buttons.length).toBeUndefined();
  });
});