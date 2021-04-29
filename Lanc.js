function test(){
var segong = new Array();;//세공 레벨
var LancRange = 700;//랜차 1랭크 마상 최대거리 기본 퍼뎀
var LancWeapon = 0;//랜차 주목뎀 1렙당 2.5%
var LancPet =  0;//랜차 마상 돌진대미지 1렙당 3%
var LancDiv = 1.15;//디바인 스몰랜스 강화효과 115%
var LacnHand = 0;//랜차 장갑,악세 랜차뎀 레벨당4%
var LancBoot = 0;//랜차신발 거리

segong[0] = 20;
segong[1] = 20;
segong[2] = 20;
segong[3] = 20;

LancWeapon = segong[0]*2.5; //주목뎀 레벨당
LancPet = segong[1]*3; //마상뎀 레벨당
LacnHand = segong[2]*4;//랜차장갑,악세 레벨당
LancBoot = segong[3]*3.3;
//700*(1+0.468)*(1+0.33)*(1+0.28+0.60)=2569%*(랜스차지 강화효과1.15) 풀세공 기준 계산식
var LancResult = 700*(1+LacnHand)*(1+LancBoot)*(1+LancWeapon+LancPet);
}