<html>
<head>
	<meta charset="UTF-8">
	<title>Vivid Church Administration</title>
	<link rel="shortcut icon" type="image/png" href="/favicon.ico"/>
	<link rel="stylesheet" href="/css/bootstrap4-yeti.css"/>
	<link rel="stylesheet" href="/css/site.css"/>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ag-grid/25.0.1/ag-grid-community.min.js" integrity="sha512-7VPz1NAYcuVu1/eQooUfDUcG2sGRdmy2P9sa6ZgtXOpAVY66bN4u+cDXPcmhrVKA44LdznEEZwMabZ3qO8HB6A==" crossorigin="anonymous"></script>
	<script src="/js/vue.js"></script>
</head>
<body>
  <?php echo $navbar; ?>

    <div id="content" class="container content">
      <div class="row">
        <div class="col-sm">
          <h4>Vivid Church Inventory System</h4>
        </div>
        <div class="col-sm" style="padding-right: 3%">
          <div class="float-right">
            <button class="btn btn-sm btn-danger" v-on:click="deleteSelected">Delete Selected</button>
          </div>
          <div class="float-right">
            <button class="btn btn-sm btn-secondary" v-on:click="editSelected">Edit Selected</button>
          </div>
          <div class="float-right">
            <button class="btn btn-sm btn-primary" v-on:click="addNew">Add New Item</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <inventory-data-grid v-on:row-selected="onRowSelected" v-bind:reload="reload"></inventory-data-grid>
        </div>
      </div>

      <edit-modal 
        v-bind:show="showEditModal" 
        v-bind:row="rowSelected"
        v-bind:mode="editMode"
        v-on:close="closeEditModal" 
        v-on:save="saveItem"
      ></edit-modal>

      <dialogue v-bind:show="showDialogue" v-bind:title="dialogueTitle" v-bind:msg="dialogueMessage" v-on:close="closeDialogue"></dialogue>
      
    </div>

    <?php echo $footer; ?>

  <script src="/js/components/inventory-data-grid.js"></script>
  <script src="/js/components/edit-modal.js"></script>
  <script src="/js/components/dialogue.js"></script>
  <script src="/js/inventory.js"></script>
</body>
</html>