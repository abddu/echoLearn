<?php

$handle = fopen('test.txt', 'r+');
ftruncate($handle, 0);
fclose($handle);

  echo "file cleared";

?> 



