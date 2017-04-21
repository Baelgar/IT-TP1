	          $.getJSON('/js/nythendra.json')
					  .done(function() {
					  })
					  .always(function(data) {
		            $('#strat-nythendra').append('<h3>Phase 1 : ' + data.Phase + '</h3>');
		            $('#strat-nythendra').append('<p><h4> Infesté : </h4>' + data.Infeste + '</p>');
								$('#strat-nythendra').append('<p><h4> Esprit contaminé </h4>: ' + data.Esprit + '</p>');
								$('#strat-nythendra').append('<p><h4> Propagation : </h4>' + data.Propagation + '</p>');
								$('#strat-nythendra').append('<p><h4> Sol contaminé: </h4>' + data.Sol + '</p>');
								$('#strat-nythendra').append('<p><h4> Souffle : </h4>' + data.Souffle + '</p>');
								$('#strat-nythendra').append('<p><h4> Pourriture : </h4>' + data.Pourriture + '</p>');
								$('#strat-nythendra').append('<p><h4> Pourriture explosive : </h4>' + data.Pourriture_explosive + '</p>');
					  });
