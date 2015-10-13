(function(rasm){
	rasm.factory('$HostService',function(){
		return{
			GetHost:function(){
				var Host = "202.91.65.115:35"; // v5.1 service host
				return Host;
			},
			GetSecurityToken: function(){
				var Token = "c6e1a5d79b94a1d87487bbe239ca7523"; //security token hard code
				return Token;
			},
			GetFromNumber: function(){
				var FromNumber = "0771355279"; //hardcode to number
				return FromNumber;
			},
			GetToNumber: function(){
				var ToNumber = "0112729729"; //hardcode from number
				return ToNumber;
			}
		}
	});

	rasm.factory('$PostData',function(){
		return{
			ActivationData: function(STBNo,Promo){
				var ActiveData = "ACT "+STBNo+" "+Promo+"";
				return ActiveData;
			},
			RefreshData:function(stbno){
				var ReData = "REFRESH "+stbno+"";
				return ReData;
			},
			ReceiptData:function(orderAccno,receiptamount){
				var ReceData = "PAYMENT "+orderAccno+" Cash "+receiptamount+"";
				return ReceData;
			},
			OrderData: function(stbno,pcode,qty,uom){
				var OdrData = "ADD "+stbno+" "+pcode+" "+qty+" "+uom+"";
				return OdrData;
			}
		}
	});

})(angular.module("DomainConfig",[]));