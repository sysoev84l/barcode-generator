<?php
function get_price($obj, $date_start)
{
  $date_start = strtotime($date_start);
  foreach ($obj as $item) {
    if ($date_start >= strtotime($item['since_date'])) {
      return ($item['price']);
    }
  }
}
function get_sn()
{
  if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on')
    $protocol = 'https://';
  else
    $protocol = 'http://';
  return $protocol . $_SERVER['HTTP_HOST'];
}
function header_delay($delay = 10, $url = '')
{
  header("Refresh:" . $delay . "; URL=" . get_sn() . $url);
}
function print_r_pre($pre)
{
  echo "<pre>";
  print_r($pre);
  echo "</pre>";
}

function var_dump_pre($pre)
{
  echo "<pre>";
  var_dump($pre);
  echo "</pre>";
}