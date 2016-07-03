<?php

include 'active_cors.php';

//Get data from our Spotify profile: https://developer.spotify.com/my-applications/#!/applications/<CLIENT_ID>
$client_id = '<CLIENT_ID>'; 
$client_secret = '<CLIENt_SECRET>'; 

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,            'https://accounts.spotify.com/api/token' );
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );
curl_setopt($ch, CURLOPT_POST,           1 );
curl_setopt($ch, CURLOPT_POSTFIELDS,     'grant_type=client_credentials' ); 
curl_setopt($ch, CURLOPT_HTTPHEADER,     array('Authorization: Basic '.base64_encode($client_id.':'.$client_secret))); 

$result=curl_exec($ch);
echo $result;

?>