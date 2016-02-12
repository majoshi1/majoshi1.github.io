var fpApp = angular.module("fpApp", []);
fpApp.controller("FPController",['$scope',function($scope) {
							$scope.functions = [];
							$scope.fpcount = 0;
							$scope.totalUafFPCount = 0;
							$scope.velocity = 12;
							$scope.totalEffort = 0;
							$scope.hoursPerMonth = 160;
							$scope.workMonth = 0;
							$scope.projectDuration = 0;
							$scope.staffingSize = 0;
							$scope.minProjectDuration = 0;
							$scope.functionsExist = false;

							$scope.types = [
									{
										name : 'Data - Referenced & Stored Within System Boundary',
										value : '1'
									},
									{
										name : 'Data - Referenced But Stored Outside the System Boundary',
										value : '2'
									},
									{
										name : 'Transaction - Create/Update/Delete Operations',
										value : '3'
									},
									{
										name : 'Transaction - Import Data Operation into Database',
										value : '4'
									},
									{
										name : 'Transaction - Plain Data Retrieval on UI',
										value : '5'
									},
									{
										name : 'Transaction - Export Data Operation without Derived Data',
										value : '6'
									},
									{
										name : 'Transaction - Reports with Derived Data on UI',
										value : '7'
									},
									{
										name : 'Transaction - Export Data Operation with Derived Data',
										value : '8'
									} ];
							$scope.type = $scope.types[0]; // data
							$scope.det = 1;
							$scope.retftr = 1;
							$scope.retftr_label = "Logical Groupings of Related Data Types";
							$scope.retftr_help = "Count of Logical Sub-Groups of Related Data Types";

							$scope.funcTypeChanged = function() {
								if ($scope.type.value <= 2) {
									$scope.retftr_label = "Logical Groupings of Related Data Types";
									$scope.retftr_help = "Count of Logical Sub-Groups of Related Data Types";
								} else {
									$scope.retftr_label = "Data File Types Referenced";
									$scope.retftr_help = "Count of Logical Data Files Referenced";
								}
							}
							
							$scope.addFunction = function() {

								var complexity = -1;
								var comp_low = 1;
								var comp_avg = 2;
								var comp_high = 3;

								if ($scope.type.value <= 2) {
									if ($scope.retftr == 1) {
										if ($scope.det >= 1 && $scope.det <= 50) {
											complexity = comp_low;
										} else {
											complexity = comp_avg;
										}
									} else if ($scope.retftr >= 2
											&& $scope.retftr <= 5) {
										if ($scope.det >= 1 && $scope.det <= 19) {
											complexity = comp_low;
										} else if ($scope.det >= 20
												&& $scope.det <= 50) {
											complexity = comp_avg;
										} else {
											complexity = comp_high;
										}
									} else {
										if ($scope.det >= 1 && $scope.det <= 19) {
											complexity = comp_avg;
										} else {
											complexity = comp_high;
										}
									}

									switch (complexity) {
									case comp_low:
										if ($scope.type.value == 1) {
											$scope.fpcount = 7;
										} else {
											$scope.fpcount = 5;
										}
										break;
									case comp_avg:
										if ($scope.type.value == 1) {
											$scope.fpcount = 10;
										} else {
											$scope.fpcount = 7;
										}
										break;
									case comp_high:
										if ($scope.type.value == 1) {
											$scope.fpcount = 15;
										} else {
											$scope.fpcount = 10;
										}
										break;
									default:
									}
								}

								if ($scope.type.value == 3
										|| $scope.type.value == 4) {
									if ($scope.retftr <= 1) {
										if ($scope.det >= 1 && $scope.det <= 15) {
											complexity = comp_low;
										} else {
											complexity = comp_avg;
										}
									} else if ($scope.retftr == 2) {
										if ($scope.det >= 1 && $scope.det <= 4) {
											complexity = comp_low;
										} else if ($scope.det >= 5
												&& $scope.det <= 15) {
											complexity = comp_avg;
										} else {
											complexity = comp_high;
										}
									} else {
										if ($scope.det >= 1 && $scope.det <= 4) {
											complexity = comp_avg;
										} else {
											complexity = comp_high;
										}
									}
									switch (complexity) {
									case comp_low:
										$scope.fpcount = 3;
										break;
									case comp_avg:
										$scope.fpcount = 4;
										break;
									case comp_high:
										$scope.fpcount = 6;
										break;
									default:
									}
								}

								if ($scope.type.value == 7
										|| $scope.type.value == 8) {
									if ($scope.retftr <= 1) {
										if ($scope.det >= 1 && $scope.det <= 19) {
											complexity = comp_low;
										} else {
											complexity = comp_avg;
										}
									} else if ($scope.retftr <= 3) {
										if ($scope.det >= 1 && $scope.det <= 5) {
											complexity = comp_low;
										} else if ($scope.det >= 6
												&& $scope.det <= 19) {
											complexity = comp_avg;
										} else {
											complexity = comp_high;
										}
									} else {
										if ($scope.det >= 1 && $scope.det <= 5) {
											complexity = comp_avg;
										} else {
											complexity = comp_high;
										}
									}
									switch (complexity) {
									case comp_low:
										$scope.fpcount = 4;
										break;
									case comp_avg:
										$scope.fpcount = 5;
										break;
									case comp_high:
										$scope.fpcount = 7;
										break;
									default:
									}
								}

								if ($scope.type.value == 5
										|| $scope.type.value == 6) {
									if ($scope.retftr <= 1) {
										if ($scope.det >= 1 && $scope.det <= 19) {
											complexity = comp_low;
										} else {
											complexity = comp_avg;
										}
									} else if ($scope.retftr <= 3) {
										if ($scope.det >= 1 && $scope.det <= 5) {
											complexity = comp_low;
										} else if ($scope.det >= 6
												&& $scope.det <= 19) {
											complexity = comp_avg;
										} else {
											complexity = comp_high;
										}
									} else {
										if ($scope.det >= 1 && $scope.det <= 5) {
											complexity = comp_avg;
										} else {
											complexity = comp_high;
										}
									}
									switch (complexity) {
									case comp_low:
										$scope.fpcount = 3;
										break;
									case comp_avg:
										$scope.fpcount = 4;
										break;
									case comp_high:
										$scope.fpcount = 6;
										break;
									default:
									}
								}

								$scope.totalUafFPCount += $scope.fpcount;
								$scope.totalEffort = $scope.velocity
										* $scope.totalUafFPCount;
								$scope.workMonth = ($scope.totalEffort / $scope.hoursPerMonth).toFixed(2);
								$scope.projectDuration = (2.5 * Math.pow($scope.workMonth, 1/3)).toFixed(2);
								$scope.staffingSize = Math.pow($scope.workMonth,0.5).toFixed(2);
								$scope.minProjectDuration = (0.75 * Math.pow($scope.workMonth, 1/3)).toFixed(2);

								$scope.hoursPerMonthChanged = function() {
									$scope.workMonth = ($scope.totalEffort / $scope.hoursPerMonth).toFixed(2);
									$scope.projectDuration = (2.5 * Math.pow($scope.workMonth, 1/3)).toFixed(2);
									$scope.staffingSize = Math.pow($scope.workMonth,0.5).toFixed(2);
									$scope.minProjectDuration = (0.75 * Math.pow($scope.workMonth, 1/3)).toFixed(2);
								}

								$scope.velocityChanged = function() {
									$scope.totalEffort = $scope.velocity
											* $scope.totalUafFPCount;
									$scope.workMonth = ($scope.totalEffort / $scope.hoursPerMonth).toFixed(2);
									$scope.projectDuration = (2.5 * Math.pow($scope.workMonth, 1/3)).toFixed(2);
									$scope.staffingSize = Math.pow($scope.workMonth,0.5).toFixed(2);
									$scope.minProjectDuration = (0.75 * Math.pow($scope.workMonth, 1/3)).toFixed(2);
								}

								$scope.functions.push({
									'name' : $scope.name,
									'type' : $scope.type,
									'det' : $scope.det,
									'retftr' : $scope.retftr,
									'fpcount' : $scope.fpcount
								});
								$scope.name = '';
								$scope.det = 1;
								$scope.retftr = 1;
								$scope.type = $scope.types[0];
								$scope.functionsExist = true;
							};

						} ]);
