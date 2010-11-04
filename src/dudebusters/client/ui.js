dojo.provide("dudebusters.client.ui");
dojo.require('dijit._Widget');
dojo.require('dijit._Templated');

dojo.require('tic.web.client.Service');
dojo.require('dudebusters.shared.SayHi');

dojo.declare(
    'dudebusters.client.ui',
    [dijit._Widget, dijit._Templated],
    {
        service: new tic.web.client.Service(),
          
        templateString: '<div>Sweet<button dojoAttachEvent="onclick:sayHi">hello</button></div>',
        
        sayHi: function(event){
            alert('woojoo');
            var command = new dudebusters.shared.SayHi({message: "asdfdfsasafd"});
            this.service.execute(command, function(result){
                alert(result.bla);
            })
        }
        
    }
    );

