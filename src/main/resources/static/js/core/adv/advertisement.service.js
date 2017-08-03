/**
 * Created by marta on 28.07.17.
 */

'use strict';

angular.
module('core.advertisement').
factory('Advertisement', ['$resource',
    function($resource) {
        var Advertisement =  $resource('adv/:owner/:id', {
            owner: "@owner",
            id: "@id"
        }, {
            'update': {
                method: 'PATCH'
            },
            get:{
                method : 'GET',
                isArray: true
            }
        });

        Advertisement.getByAuthor = function(author_id){
            return Advertisement.get({
                owner: "author",
                id: author_id
            })
        };

        Advertisement.getAll = function(){
            return Advertisement.get({
                owner: "all"
            })
        };

        Advertisement.getStatuses = function(){
            return Advertisement.get({
                owner: "statuses"
            })
        };

        Advertisement.getTypes = function(){
            return Advertisement.get({
                owner: "types"
            })
        };

        return Advertisement;
    }
]);