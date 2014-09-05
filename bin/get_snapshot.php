<?php

	$url = 'https://coinbase.com/api/v1/prices/sell?qty=1';
	$JSON1 = file_get_contents($url);

	$url = 'https://coinbase.com/api/v1/prices/buy?qty=1';
	$JSON2 = file_get_contents($url);
	
	$arr = array('sell' => json_decode($JSON1), 'buy' => json_decode($JSON2));
	echo json_encode($arr);
?>