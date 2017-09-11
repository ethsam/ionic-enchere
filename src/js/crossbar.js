var connection = new autobahn.Connection({
            url: "ws://5.189.177.17:8182/ws",
            realm: "realm1"
         });


         // timers
         //
         var t1;


         // fired when connection is established and session attached
         //-----------------------------------------------------------

         connection.onopen = function (session, details) {

            console.log("Connected");

            // SUBSCRIBE to a topic and receive events
            //------------------------------------------

            function on_counter (args) {
               var counter = args[0];
               console.log("on_counter() event received with counter " + counter);
            }
            session.subscribe('com.example.oncounter', on_counter).then(
               function (sub) {
                  console.log('subscribed to topic');
               },
               function (err) {
                  console.log('failed to subscribe to topic', err);
               }
            );

            // PUBLISH an event every second
            //-----------------------------------------
            //

            //t1 = setInterval(function () {

            //         session.publish('com.example.onhello', ['Hello from JavaScript (browser)']);
            //   console.log("published to topic 'com.example.onhello'");
            //}, 1000);


         };  // end of connection.onopen


         // fired when connection was lost (or could not be established)
         //-------------------------------------------------------------

         connection.onclose = function (reason, details) {
            console.log("Connection lost: " + reason);
            if (t1) {
               clearInterval(t1);
               t1 = null;
            }
         }


         // now actually open the connection
         //
         connection.open();
