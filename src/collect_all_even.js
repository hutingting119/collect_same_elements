
function collect_same_elements(collection_a, object_b) {
        var newArray =[];

        for(var i=0;i<collection_a.length;i++){

            if (isExist(collection_a[i].key,collection_b["value"])){
                newArray.push(collection_a[i].key);
            }
        }

        return newArray;
    }

function isExist(element ,collection){

        for(var i=0;i<collection.length;i++){

            if(collection[i]===element){
                return true;
            }
        }

        return false;
    }

module.exports = collect_same_elements;
