<!doctype html>
<html lang="en-us" dir="ltr" data-ng-app="app" data-ng-controller="ctrl" data-ng-init="pageInit()">
	<head>
		<meta charset="utf-8">
		<title>${{snapshot_new.sell | number:0}} | ${{snapshot_new.buy | number:0}}</title>

		<!-- Meta Information -->
		<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
		<meta content="" name="keywords" />
		<meta content="" name="description" />
		<meta name="robots" content="index,follow">

		<!-- Always force latest IE rendering engine & Chrome Frame -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<!-- Mobile First -->
		<meta name="viewport" content="width=device-width,initial-scale=1">

		<!-- Icons -->
		<link href="favicon.ico" rel="shortcut icon" />
		<link href="favicon.png" rel="icon" type="image/png" />

		<!-- Stylesheet with IE speed hack -->
		<!--[if IE]><![endif]-->
		<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" href="css/style.css" />	

		<!-- Load AngularJS from Google CDN -->
		<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.js"></script>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
		
		<!-- Load app files -->
		<script src="js/app.js"></script>
		<script src="js/services.js"></script>
		<script src="js/controllers.js"></script>
		<script src="js/filters.js"></script>
		<script src="js/directives.js"></script>
	</head>
	<body itemscope itemtype="http://schema.org/WebPage">
		<div class="center-width">
			<table>
				<tr>
					<td>
						<h2 class="lead">Market</h2>
						<dl class="dl-horizontal">
							<dt><strong>Buy:</strong></dt>
							<dd><span data-ng-class="{'red': snapshot_new.buy < snapshot_old.buy, 'green': snapshot_new.buy > snapshot_old.buy}"><span data-ng-if="snapshot_new.buy > snapshot_old.buy">&#x25B2;</span><span data-ng-if="snapshot_new.buy < snapshot_old.buy">&#x25Bc;</span>{{snapshot_new.buy | currency:"$"}}</span></dd>
							<dt><strong>Sell:</strong></dt>
							<dd><span data-ng-class="{'red': snapshot_new.sell < snapshot_old.sell, 'green': snapshot_new.sell > snapshot_old.sell}"><span data-ng-if="snapshot_new.sell > snapshot_old.sell">&#x25B2;</span><span data-ng-if="snapshot_new.sell < snapshot_old.sell">&#x25Bc;</span>{{snapshot_new.sell | currency:"$"}}</span></dd>
						</dl>
					</td>
					<td>
						<h2 class="lead">Performance:</h2>
						<dl class="dl-horizontal">
							<dt><strong>BTC balance:</strong></dt>
							<dd>฿{{data.final_balance}}</dd>
							<dt><strong>Present value:</strong></dt>
							<dd>{{stats.getValue() | currency:"$"}}</dd>
						</dl>
					</td>
				</tr>
			</table>
			<div class="alert alert-success"><small class="text-success">Refresh took {{app.load_time}}ms. {{app.refresh}} total refreshes took place.</small></div>
		</div>
	</body>
</html>