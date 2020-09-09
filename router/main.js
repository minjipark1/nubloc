module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });

    app.get('/wolsung/',function(req,res){
        res.render('wolsung.html');

   app.get('/wolsung/1',function(req,res){
        res.render('wolsung-1.html');

    app.get('/wolsung/1/20200510/2',function(req,res){
         res.render('wolsung-1-20200510-2.html');

     app.get('/wolsung/1/20200816/2',function(req,res){
        res.render('wolsung-1-20200816-2.html');
    
     app.get('/wolsung/1/20200816/3',function(req,res){
         res.render('wolsung-1-20200816-3.html');

     app.get('/wolsung/02',function(req,res){
            res.render('wolsung-02.html');
    
    app.get('/wolsung/2/20190906/2',function(req,res){
             res.render('wolsung-02-20190906-2.html');
    
    app.get('/wolsung/2/20190906/3',function(req,res){
            res.render('wolsung-02-20190906-3.html');
        
     app.get('/wolsung/2',function(req,res){
             res.render('wolsung-2');       

             app.get('/wolsung/3',function(req,res){
                res.render('wolsung-3.html');
            });
           app.get('/wolsung/3/20190121/2',function(req,res){
                res.render('wolsung-3-20190121-2.html');
        
            app.get('/wolsung/3/20190121/3',function(req,res){
                 res.render('wolsung-3-20190121-3.html');
        
             app.get('/wolsung/4',function(req,res){
                res.render('wolsung-4.html');

                app.get('/wolsung/4',function(req,res){
                    res.render('wolsung-4.html');
    
                    app.get('/hanbit/',function(req,res){
                        res.render('hanbit.html');

                        app.get('/hanbit/1',function(req,res){
                            res.render('hanbit-1.html');

                            app.get('/hanbit/1/20190103/2',function(req,res){
                                res.render('hhanbit-1-20190103-2.html');
        
                                app.get('/hanbit/1/20190103/3',function(req,res){
                                    res.render('hhanbit-1-20190103-3.html');



                                    app.get('/hanbit/1/20190309/2',function(req,res){
                                        res.render('hhanbit-1-20190309-2.html');
                
                                        app.get('/hanbit/1/20190309/3',function(req,res){
                                            res.render('hhanbit-1-20190309-3.html');

                                            app.get('/hanbit/1/20190510/2',function(req,res){
                                                res.render('hhanbit-1-20190510-2.html');
                        
                                                app.get('/hanbit/1/20190510/3',function(req,res){
                                                    res.render('hhanbit-1-20190510-3.html');
    });
}
