<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
		<div class="row">
			<h2 style="margin-top:20px;">TEST SERVER</h2>
			<div class="callout secondary" style="margin-top:40px;">
				<?PHP 
				
				$case1 = 1213;

				echo solution($case1);

				function solution($N) {
					if($N == 0){
						return 1;
					}
				
					//break the string to chars
					$arr1 = str_split($N);
					
					$digits = count($arr1);
					
					//get the lowest number possible by number of digits
					$lowest = $highest = "1";
					for($i = 1; $i <= $digits - 1; $i++){
						$lowest .= "0";
					}
					
					for($i = 1; $i <= $digits; $i++){
						$highest .= "0";
					}
					
					//now run loop through those numbers and every number check
					//if has excatly same digits as original
					
					//keep results on vault
					$vault = array();
					
					$tmp_A = sort($arr1);
					
					for($case = $lowest; $case < $highest; $case++){
						$case_arr = str_split($case);
						
						if(array_count_values($arr1) == array_count_values($case_arr)){
							array_push($vault, $case_arr);
						}
					}
					
					return count($vault);
				}
				
				
				/* function solution($S) {
					//break the string to chars
					$arr1 = str_split($S);
					
					$shifts = count($arr1);
					
					$stack = array();
					//count the letters
					for ($i = 0; $i < $shifts; $i++) {
						//perform a machine operation
						switch($arr1[$i]){
							case "+":
								if(count($stack) < 2){
									//cant perform it, break
									return -1;
								}
								
								$elements = get_last_two($stack);

								//pop from stack the two last
								for ($x = 0; $x <= 1; $x++) {
									array_pop($stack);
								}
								
								//add up and push to array
								array_push($stack,(intval($elements["last"]) + intval($elements["before_last"])));
								break;
							case "*":
								if(count($stack) < 2){
									//cant perform it, break
									return -1;
								}
								
								$elements = get_last_two($stack);

								//pop from stack the two last
								for ($x = 0; $x <= 1; $x++) {
									array_pop($stack);
								}
								
								//add up and push to array
								array_push($stack,(intval($elements["last"]) * intval($elements["before_last"])));
								break;
							default:
								if(!is_numeric($arr1[$i])){
									return -1;
								}
								array_push($stack,$arr1[$i]);
								break;
						}
					}		
					
					return intval(end($stack));
				}
				
				function get_last_two($stack){
					$last = end($stack);
					$before_last = $stack[count($stack) - 2];
					
					if(!is_numeric($last) || !is_numeric($before_last)){
						//one of chars isn't number, break
						return -1;
					}
					
					return array(
						"last" => $last,
						"before_last" => $before_last
					);
				} */
								
				?>
			</div>
		</div>

        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
		
		<!-- Compressed foundation CSS -->
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/foundation/6.2.1/foundation.min.css">

		<!-- Compressed foundation JavaScript -->
		<script src="https://cdn.jsdelivr.net/foundation/6.2.1/foundation.min.js"></script>
    </body>
</html>
