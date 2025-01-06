/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    let myPromise = new Promise(function(resolve, reject){
        setTimeout(function() {resolve(millis);}, millis)
    })

    return myPromise.then((millis))
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */