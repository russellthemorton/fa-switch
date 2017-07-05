(function () {
	'use strict';

	angular
		.module('faSwitch', [])
		.directive('faSwitch', directive);

	directive.$inject = [];

	/* @ngInject */
	function directive() {
		var directive = {
			bindToController: true,
			controller: Controller,
			controllerAs: 'vm',
			link: link,
			restrict: 'E',
			scope: {
				startIcon: '@',
				endIcon: '@',
				iconState: '@',
				animationType: '@'
			},
			compile: function (element, attrs) {

				attrs.animationType = attrs.animationType.toLocaleLowerCase();
				var options = ['rotate', 'rotate360', 'flip-horizontal', 'flip-vertical', 'shrink-grow', 'out-in', 'shrink-grow-rotate', 'bounce'];

				if (!attrs.animationType || attrs.animationType == '') attrs.animationType = "shrink-grow-rotate";
				if (options.indexOf(attrs.animationType) == -1) attrs.animationType = "shrink-grow-rotate";

			},
			template: `
			<div class="fa-switch">
				<div class="fa-switch-item">
						<i class="fa fa-switch-icon fa-{{vm.startIcon}}"
							 ng-class="vm.animation(true)"></i>	
				</div>
				<div class="fa-switch-item">			
						<i class="fa fa-switch-icon fa-{{vm.endIcon}}"
							 ng-class="vm.animation(false)"></i>					
				</div>
			</div>
	`
		};
		return directive;

		function link(scope, element, attrs, controller) {
		}
	}

	Controller.$inject = ['$scope'];

	/* @ngInject */
	function Controller($scope) {

		var vm = this;

		var state

		vm.animation = Animate;

		$scope.$watch('vm.iconState', function (newValue, oldValue) {
			if (newValue == '' || oldValue == '') return
			if (newValue != oldValue) state = eval(newValue);
		})

		function Animate(startEnd) {
			if (startEnd == true) {
				return state != null ? (state ? vm.animationType + '-leave' : vm.animationType + '-enter') : ''
			} else {
				return state != null ? (state ? vm.animationType + '-enter' : vm.animationType + '-leave') : 'fa-switch-hidden'
			}
		}

	}
})();