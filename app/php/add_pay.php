<?php
  $file = file_get_contents('../../data.json');        // Открыть файл data.json
  
  $taskList=json_decode($file,TRUE);                  // Декодировать в массив 
      $data['id']=json_decode($_POST['id']);
      
    
      
     foreach ( $taskList  as $key => $value){        // Найти в массиве  
  
        if (in_array(  $data['id'], $value)) {           
            $taskList[$key]['pay_amount']=$taskList[$key]['pay_amount']+$taskList[$key]['one_amount'];
            $taskList[$key]['pay_months']=$taskList[$key]['pay_months']+1;

            }
        } 
  
  file_put_contents('../../data.json',json_encode($taskList)); // Перекодировать в формат и записать в файл.
  unset($taskList);