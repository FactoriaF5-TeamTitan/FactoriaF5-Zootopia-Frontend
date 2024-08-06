<script setup>

</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6 bg-dasboard"></div>
      <div class="col-12 col-md-6 d-flex align-items-center">
        <div class=" offset-md-3">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Total animals:</h5>
              <div class="mt-2"><button type="button" class="btn btn-primary">List of animals</button></div>
              <button class="btn btn-primary mt-2" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Add Animal</button>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
    tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Add Animal</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Show a second modal and hide this one with the button below.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-dasboard {
  background-image: url("../assets/img/img_dashboard.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>
