<?php

$handle = fopen('php/test.txt', 'r+');
ftruncate($handle, 0);
fclose($handle);

  echo "file cleared";

?> 



