class MyMath{
    sum1(a, b) {
        return a+b;
    }
    multi(a, b) {
        return a*b;
    }

    sum(a,b,callback){
        setTimeout(function () {
            callback(a+b);
        },1000);
    }
}
module.exports=MyMath
