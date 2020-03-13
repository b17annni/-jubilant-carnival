function btnclic(){
    document.getElementById("try").innerHTML = getsome();
}

function getsome(){
    
}

	function showCustomer()
		{
			var customerID=document.getElementById("try").value;
	
		  $.ajax({
				type: 'POST',
				url: 'booking/getcustomer_XML.php',
				data: { customerID: encodeURIComponent(customerID)},
				success:  ResultCustomers,
				error: errormsg
			});
		}
	
		function ResultCustomers(returnedData)
		{
			// Fix characters in XML notation to HTML notation
			fixChars(returnedData);

			var resultset=returnedData.childNodes[0];
	
			// Iterate over all nodes in root node (i.e. customers)
			for (i = 0; i < resultset.childNodes.length; i++) {
					// Iterate over all child nodes of that node that are customer nodes
					if(resultset.childNodes.item(i).nodeName=="customer"){
							// Retrieve first name and last name for node
							var customer=resultset.childNodes.item(i);
							var div=document.getElementById('CustomerOutputDiv');
							output=customer.attributes['id'].nodeValue;
							output+='<br> Firstname: '+customer.attributes['firstname'].nodeValue;
							output+='<br> Lastname: '+customer.attributes['lastname'].nodeValue;
							output+='<br> Address: '+customer.attributes['address'].nodeValue;
							output+='<br> Email: '+customer.attributes['email'].nodeValue;
							output+='<br> Last Seen: '+customer.attributes['lastvisit'].nodeValue;
							output+='<br> Tel: '+customer.attributes['auxdata'].nodeValue;
							div.innerHTML=output;
					}
			}
		}