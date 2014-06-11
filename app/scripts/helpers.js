/**
 * RCM.helpers module used to define utility functions.
 * All helpers should be defined as services.
 */
angular.module("RCM.helpers")

    /**
     * Extract specific fields of directive's attrs to scope.
     * @service extractAttrsToScope
     */
    .provider("extractAttrsToScope", function () {
        this.$get = function () {

            /**
             * Extract attributes to scope.
             * @param {Object} attrs
             * @param {Array} fields
             * @return {Object} Available Attributes.
             */
            return function (scope, attrs, fields) {
                angular.forEach(fields, function (field) {
                    if (angular.isDefined(attrs[field])) {
                        scope[field] = attrs[field];
                    }
                });
            };
        }
    });