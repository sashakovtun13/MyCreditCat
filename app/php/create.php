<?php

$file = file_get_contents('../../data.json');
$list = json_decode($file,TRUE);


$data['id']=uniqid();

$data['name'] = isset($_POST['name']) ? $_POST['name']: '';
$data['data_end'] = isset($_POST['data_end']) ? $_POST['data_end']: '';
$data['pay_months'] = 0;
$data['months'] = isset($_POST['months']) ? $_POST['months']: '';
$data['one_amount'] = isset($_POST['one_amount']) ? $_POST['one_amount']: '';
$data['all_amount'] = isset($_POST['all_amount']) ? $_POST['all_amount']: '';
$data['pay_amount'] = 0;


$list[] = ['id'=> $data['id'],
'name'=> $data['name'],
'data_end'=>$data['data_end'],
'pay_months'=>$data['pay_months'],
'months'=>$data['months'],
'one_amount'=>$data['one_amount'],
'all_amount'=>$data['all_amount'],
'pay_amount'=>$data['pay_amount']

];
file_put_contents('../../data.json',json_encode($list));

unset($file);
unset($list);    