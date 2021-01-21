<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Vivid Church Administration</title>
	<link rel="shortcut icon" type="image/png" href="/favicon.ico"/>
	<link rel="stylesheet" href="/css/bootstrap4-yeti.css"/>
	<link rel="stylesheet" href="/css/site.css"/>
  <link rel="stylesheet" href="/css/fa.css"/>
	<script src="/js/vue.js"></script>
</head>
<body>
  <?php echo $navbar; ?>
	
  <div id="content" class="container-fluid content">
      <div class="row">
        <div class="col-sm">
          <inventory-summary></inventory-summary>
        </div>
        <div class="col-sm">
          <user-summary></user-summary>
        </div>
        <div class="col-sm"></div>
      </div>
  </div>

	<?php echo $footer; ?>

  <script src="/js/components/inventory-summary.js"></script>
  <script src="/js/components/user-summary.js"></script>
  <script src="/js/admin.js"></script>
</body>
</html>