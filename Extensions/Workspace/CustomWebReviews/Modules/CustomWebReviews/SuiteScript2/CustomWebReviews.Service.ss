/**
* @NApiVersion 2.x
* @NModuleScope Public
*/
define(['N/https','N/log','N/search','N/file'],function (https,log,search,file) {
    "use strict";
    var SRC_IMAGE_URL = 'https://sca2021.pangeaaudio.com/Web Reviews/';
    return {
        
        service: function (ctx) {
            var reviews = [];
            var ids = ctx.request.parameters.id;
            // var sl_response = https.post({
            //     url :'https://5035704-sb2.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=1821&deploy=1&compid=5035704_SB2&h=e3f0d31c77db606ebefa',
            //     headers: {'Content-Type': 'application/json'},
            //     body : JSON.stringify({id : ids})
            // }) 
            reviews = this.getReviews(ids);
            log.debug({
                title: 'reviews',
                details: reviews
            });
            ctx.response.write(JSON.stringify({message: reviews}));
        },
        getReviews : function getReviews(id){
            try {
                var title = 'getReviews () :: ';
                var searchfilters = [];
                log.debug({
                    title: title + "id",
                    details: id
                })
                var reviewsArray = [], obj ={};
                if(id){
                    searchfilters.push(search.createFilter({
                        name: 'custrecord_review_item',
                        operator: search.Operator.IS,
                        values: id
                    }))
                }
                searchfilters.push(search.createFilter({
                    name: 'isinactive',
                    operator: search.Operator.IS,
                    values: false
                }))
                var reviewsSearchObj = search.create({
                    type: "customrecord_salora_webreviews",
                    filters:searchfilters,
                    columns:
                    [
                       search.createColumn({name: "name"}),
                       search.createColumn({name: "custrecord_review_item"}),
                       search.createColumn({name: "custrecord_review_image"}),
                       search.createColumn({name: "custrecord_reviewer_name"}),
                       search.createColumn({name: "custrecord_reviewer_company"}),
                       search.createColumn({name: "custrecord_reviewer_link"}),
                       search.createColumn({name: "custrecord_reviewer_details"}),
                       search.createColumn({name: "custrecord_donot_show_review"}),
                       search.createColumn({name: "custrecord_review_video"}),
                       search.createColumn({name: "created",sort: search.Sort.DESC})
                    ]
                 });
                 reviewsSearchObj.run().each(function(result){
                    obj ={};
                    var image;
                    obj.name = result.getValue({
                        name: 'name'
                    });
                    obj.item = result.getValue({
                        name: 'custrecord_review_item'
                    });
                    image = result.getText({
                        name: 'custrecord_review_image'
                    });
                    // if(image){
                    //  var fileObj = file.load({
                    //         id: image
                    //     });
                    //     log.debug({
                    //         title: 'fileObj',
                    //         details: fileObj
                    //     })
                    //     obj.image = fileObj.url
                    // }else{
                    //     obj.image = ''
                    // }
                    if(image){
                        obj.image = image;
                    }else{
                        obj.image = '';
                    }
                    obj.reviewName = result.getValue({
                        name: 'custrecord_reviewer_name'
                    });
                    obj.company = result.getValue({
                        name: 'custrecord_reviewer_company'
                    });
                    obj.link = result.getValue({
                        name: 'custrecord_reviewer_link'
                    });
                    obj.details = result.getValue({
                        name: 'custrecord_reviewer_details'
                    });
                    obj.show = result.getValue({
                        name: 'custrecord_donot_show_review'
                    });
                    obj.video = result.getValue({
                        name: 'custrecord_review_video'
                    });
                    reviewsArray.push(obj);
                    return true;
                 });
                 log.debug(title+'debug',reviewsArray);
                 return reviewsArray.length ? reviewsArray : []
            } catch (error) {
                log.error(title+'ERROR',error.message);
            }
        }
    };
});
