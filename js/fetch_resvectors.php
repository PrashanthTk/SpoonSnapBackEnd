<?php

#call the db.
# Now fetch the correct user's row from the recovectors table
# The user_cuis_vec vector should be in this format
/*
$user_cuis_vec=array("North Indian"=>0.25,"South Indian"=>0.48,"Desserts"=> 0.84, etc etc) # current resultant 
#food state ( cuisine) of the user
$num_reports=13 # number of reports submitted or number of times logged. Same thing

*/
$new_cuis_vec=array("North Indian"=>0.75,"South Indian"=>0.45,"Desserts"=> 0.24, etc etc);
$user_cuis_vec= array_map(function($vec) { return $vec * ($num_reports*($num_reports+1))/2; }, $user_cuis_vec);
$num_reports++;
$denom=($num_reports*($num_reports+1))/2;
$new_cuis_vec= array_map(function($vec) { return $vec *$denom; }, $new_cuis_vec);
#resultant user cuisine vector
$user_cuis_vec= ($user_cuis_vec+$new_cuis_vec)/$denom;

// Now update the recovectors table with the new values of $user_cuis_vec and $num_reports



?>