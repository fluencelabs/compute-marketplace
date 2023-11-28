/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  DeployContracts,
  DeployContractsInterface,
} from "../../Deploy.s.sol/DeployContracts";

const _abi = [
  {
    inputs: [],
    name: "IS_SCRIPT",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "run",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610027576201000162ff00ff19600d541617600d556126fd908161002d8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c9081630a9254e41461004a57508063c0406226146100455763f8ccbf471461004057600080fd5b610435565b610232565b3461021f578060031936011261021f578046807a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000080821015610211575b506d04ee2d6d415b85acef810000000080831015610202575b50662386f26fc10000808310156101f3575b506305f5e100808310156101e4575b50612710808310156101d5575b5060648210156101c5575b600a809210156101bb575b6001908160216100f0828701610979565b95860101905b610185575b5050505061010890610550565b604051636c98507360e11b81528281600481737109709ecfa91a80626ff3989d68f67f5b1dd12d5afa9182156101805761015b9261015692859161015e575b50610150610659565b90610682565b6107c2565b80f35b61017a91503d8087833e61017281836104f5565b810190610615565b85610147565b61063a565b600019019083906f181899199a1a9b1b9c1cb0b131b232b360811b8282061a8353049182156101b6579190826100f6565b6100fb565b91600101916100df565b91906064600291049101916100d4565b600491939204910191846100c9565b600891939204910191846100bc565b601091939204910191846100ad565b6020919392049101918461009b565b604093508104915084610082565b80fd5b600091031261022d57565b600080fd5b3461022d5760008060031936011261021f5761024c610e6b565b90610255611681565b61025d6111f3565b92617a69815114600014610400576102736109ab565b936040908151916334515cdb60e21b835282610293600498898301610a2f565b03968684737109709ecfa91a80626ff3989d68f67f5b1dd12d9981838c5af19384156101805787946103e4575b50865b600a63ffffffff8216106102fa5750505050506102f29293505b602081015160606040830151920151926113d3565b61015b6117b4565b8251636229498b60e01b815290602080838c818061031b878d8b8401610aa4565b03915afa928315610180576103558c8c95849387916103b7575b508851968780948193630884001960e21b83528b83019190602083019252565b03925af180156101805761038593610380928c9261038a575b505061037a818b610bc9565b86610bc9565b610a7b565b6102c3565b6103a99250803d106103b0575b6103a181836104f5565b810190610ac8565b388061036e565b503d610397565b6103d79150843d86116103dd575b6103cf81836104f5565b810190610a95565b38610335565b503d6103c5565b6103f99194503d8089833e61017281836104f5565b92386102c0565b8361040f6102f29495846112d7565b61041b575b50506102dd565b61042e916104298286610ae7565b610ae7565b3880610414565b3461022d57600036600319011261022d57602060ff600d5460101c166040519015158152f35b634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161048457604052565b61045b565b606081019081106001600160401b0382111761048457604052565b608081019081106001600160401b0382111761048457604052565b602081019081106001600160401b0382111761048457604052565b604081019081106001600160401b0382111761048457604052565b90601f801991011681019081106001600160401b0382111761048457604052565b60005b8381106105295750506000910152565b8181015183820152602001610519565b9061054c60209282815194859201610516565b0190565b9061058c60256040518461056e829651809260208086019101610516565b810164173539b7b760d91b60208201520360058101855201836104f5565b565b6040519061058c826104a4565b6040519061058c82610489565b6001600160401b03811161048457601f01601f191660200190565b909291926105d0816105a8565b916105de60405193846104f5565b82948284528282011161022d57602061058c930190610516565b9080601f8301121561022d578151610612926020016105c3565b90565b9060208282031261022d5781516001600160401b03811161022d5761061292016105f8565b6040513d6000823e3d90fd5b60405190610653826104bf565b60008252565b60405190610666826104da565b600d82526c2f6465706c6f796d656e74732f60981b6020830152565b61058c9193929360405194859183516106a381602096878088019101610516565b83016106b782518093878085019101610516565b016106ca82518093868085019101610516565b010380855201836104f5565b90600182811c92168015610706575b60208310146106f057565b634e487b7160e01b600052602260045260246000fd5b91607f16916106e5565b81811061071b575050565b60008155600101610710565b90601f8211610734575050565b61058c91600e6000527fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd906020601f840160051c8301931061077e575b601f0160051c0190610710565b9091508190610771565b9190601f811161079757505050565b61058c926000526020600020906020601f840160051c8301931061077e57601f0160051c0190610710565b9081516001600160401b038111610484576107e7816107e2600e546106d6565b610727565b602080601f83116001146108235750819293600092610818575b50508160011b916000199060031b1c191617600e55565b015190503880610801565b90601f19831694610856600e6000527fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd90565b926000905b87821061089357505083600195961061087a575b505050811b01600e55565b015160001960f88460031b161c1916905538808061086f565b8060018596829496860151815501950193019061085b565b91909182516001600160401b038111610484576108d2816108cc84546106d6565b84610788565b602080601f831160011461090e575081929394600092610903575b50508160011b916000199060031b1c1916179055565b0151905038806108ed565b90601f1983169561092485600052602060002090565b926000905b88821061096157505083600195969710610948575b505050811b019055565b015160001960f88460031b161c1916905538808061093e565b80600185968294968601518155019501930190610929565b90610983826105a8565b61099060405191826104f5565b82815280926109a1601f19916105a8565b0190602036910137565b604051906109b882610489565b603b82527f73742074657374207465737420746573742074657374206a756e6b00000000006040837f746573742074657374207465737420746573742074657374207465737420746560208201520152565b90602091610a2381518092818552858086019101610516565b601f01601f1916010190565b9060806106129260408152600e60408201526d414e56494c5f4d4e454d4f4e494360901b60608201528160208201520190610a0a565b634e487b7160e01b600052601160045260246000fd5b63ffffffff809116908114610a905760010190565b610a65565b9081602091031261022d575190565b9063ffffffff610ac1602092959495604085526040850190610a0a565b9416910152565b9081602091031261022d57516001600160a01b038116810361022d5790565b90610b9461058c92604051906000806020958685019363a9059cbb60e01b855260018060a01b0380921660248701528219604487015260448652610b2a866104a4565b169260405194610b39866104da565b8786527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656488870152519082855af13d15610bc1573d91610b78836105a8565b92610b8660405194856104f5565b83523d60008785013e610c8c565b8051918215928315610ba9575b505050610c2d565b610bb99350820181019101610c15565b388080610ba1565b606091610c8c565b90610b9461058c92604051906000806020958685019363a9059cbb60e01b855260018060a01b03809216602487015269d3c21bcecceda1000000604487015260448652610b2a866104a4565b9081602091031261022d5751801515810361022d5790565b15610c3457565b60405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608490fd5b91929015610cee5750815115610ca0575090565b3b15610ca95790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b825190915015610d015750805190602001fd5b60405162461bcd60e51b8152908190610d1d9060048301610d21565b0390fd5b906020610612928181520190610a0a565b60405190608082018281106001600160401b038211176104845760405260006060838281528260208201528260408201520152565b60405190610d7482610489565b60278252662d2d2d2d2d2d2d60c81b6040837f2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d20454e56202d2d2d2d2d2d2d2d2d2d60208201520152565b60405190610dbd826104da565b600982526821a420a4a72fa4a21d60b91b6020830152565b60405190610de2826104da565b600f82526e22a827a1a42fa22aa920aa24a7a71d60891b6020830152565b60405190610e0d826104da565b601682527526a4a72fa222a827a9a4aa22a22fa2a827a1a422a99d60511b6020830152565b60405190610e3f826104da565b601782527f4d494e5f52454d41544348494e475f45504f434845533a0000000000000000006020830152565b610e73610d32565b5060408051635e97348f60e01b8082526004820192909252600e60448201526d22a827a1a42fa22aa920aa24a7a760911b6064820152600f6024820152602091600091737109709ecfa91a80626ff3989d68f67f5b1dd12d848260848187855af1918215610180578492611044575b50604051838152858180610f2a60048201906040825260156040830152744d494e5f4445504f53495445445f45504f4348455360581b60608301526002602060808401930152565b038188865af19384156101805786918695611025575b5060408051918252600482015260166044820152754d494e5f52454d41544348494e475f45504f4348455360501b606482015260026024820152918290608490829088905af19384156101805793611006575b50610fa4610f9f610d67565b6110f4565b610fbd46610fb8610fb3610db0565b611063565b61114b565b610fcc81610fb8610fb3610dd5565b610fdb82610fb8610fb3610e00565b610fea83610fb8610fb3610e32565b610ff261058e565b934685528401526040830152606082015290565b61101e919350843d86116103dd576103cf81836104f5565b9138610f93565b61103d919550823d84116103dd576103cf81836104f5565b9338610f40565b61105c919250853d87116103dd576103cf81836104f5565b9038610ee2565b61061290604051611073816104da565b60058152641b5b39346d60d81b60208201525b60405161061291611096826104da565b6004825260209182810190631b5b306d60e01b82526110e860405196846110c6899651809289808a019101610516565b85016110da82518093898085019101610516565b019151809386840190610516565b010380845201826104f5565b61112261113061058c9260405192839163104c13eb60e21b6020840152602060248401526044830190610a0a565b03601f1981018352826104f5565b600080916020815191016a636f6e736f6c652e6c6f675afa50565b61113061117a9161058c936040519384926309710a9d60e41b6020850152604060248501526064840190610a0a565b90604483015203601f1981018352826104f5565b6040519061119b826104da565b60048252631d11931560e21b6020830152565b604051906111bb826104da565b600982526805465737445524332360bc1b6020830152565b604051906111e0826104da565b60048252631d1554d160e21b6020830152565b60405160406020820152600d60608201526c23363ab2b731b2902a37b5b2b760991b608082015260806040820152600460a0820152631d11931560e21b60c082015260c0815260e08101908082106001600160401b038311176104845761126d9160405261125f61118e565b6112676111ae565b90612385565b509060018060a01b03809216916112d26040516112ca816111226020820160c0906040815260096040820152682aa9a2102a37b5b2b760b91b60608201526080602082015260046080820152631d1554d160e21b60a08201520190565b61125f6111d3565b501690565b604080516001600160a01b0392831660208201529290911682820152815261134d9061130281610489565b60405161130e816104da565b600681526511985d58d95d60d21b60208201526040519061132e826104da565b600d82526c13dddb98589b1951985d58d95d609a1b6020830152612385565b9091565b60405161135d816104bf565b60008152906000368137565b60405190611376826104da565b6004825263436f726560e01b6020830152565b6001600160a01b03909116815260406020820181905261061292910190610a0a565b604051906113b8826104da565b600c82526b4552433139363750726f787960a01b6020830152565b926114ee936114ac6114de93946114146113eb611351565b6040516113f7816104da565b600881526710dbdc99525b5c1b60c21b6020820152611267611369565b5093611465611421611351565b60405161142d816104da565b60088152671119585b125b5c1b60c21b60208201526040519061144f826104da565b60048252631119585b60e21b6020830152612385565b50604051636c28e34960e01b60208201526001600160a01b03958616602482015260448101989098526064880192909252608487015290911660a4850152839060c4820190565b03906114c0601f19928381018652856104f5565b6114d260405194859260208401611389565b039081018352826104f5565b6114e6611369565b6112676113ab565b5050565b60405190600082600e5491611506836106d6565b8083529260019081811690811561158c575060011461152d575b5061058c925003836104f5565b600e600090815291507fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd5b848310611571575061058c935050810160200138611520565b81935090816020925483858a01015201910190918592611558565b90506020925061058c94915060ff191682840152151560051b82010138611520565b90604051918260008254926115c2846106d6565b90818452600194858116908160001461162f57506001146115ec575b505061058c925003836104f5565b9093915060005260209081600020936000915b81831061161757505061058c935082010138806115de565b855488840185015294850194879450918301916115ff565b91505061058c94506020925060ff191682840152151560051b82010138806115de565b6040519061165f826104da565b60138252720529ba30b93a103232b83637bcb4b73397171760691b6020830152565b604051634777f3cf60e01b8152806116bc6004820190604082526004604083015263151154d560e21b60608301526000602060808401930152565b03600091602081737109709ecfa91a80626ff3989d68f67f5b1dd12d938186865af190811561018057839161175a575b5015611745575b803b15611741578190600460405180948193637fb5297f60e01b83525af1801561018057611728575b5061058c610f9f611652565b8061173561173b92610471565b80610222565b3861171c565b5080fd5b6117556117506114f2565b611c1d565b6116f3565b61177b915060203d8111611781575b61177381836104f5565b810190610c15565b386116ec565b503d611769565b60405190611795826104da565b601082526f0291195c1b1bde48199a5b9a5cda195960821b6020830152565b604051634777f3cf60e01b8152806117ef6004820190604082526004604083015263151154d560e21b60608301526000602060808401930152565b03600091602081737109709ecfa91a80626ff3989d68f67f5b1dd12d938186865af190811561018057839161188b575b501561186e575b803b15611741578190600460405180948193633b756e9b60e11b83525af180156101805761185b575b5061058c610f9f611788565b8061173561186892610471565b3861184f565b6118766125a6565b6118866118816114f2565b611fbf565b611826565b6118a3915060203d81116117815761177381836104f5565b3861181f565b90602090818382031261022d5782516001600160401b039384821161022d570181601f8201121561022d57805193808511610484578460051b90604051956118f3868401886104f5565b865284808701928401019380851161022d57858401925b85841061191b575050505050505090565b835183811161022d578791611935848480948a01016105f8565b81520193019261190a565b611954602092604083526040830190610a0a565b9082818303910152600081520190565b805190600160401b821161048457600754826007558083106119ca575b5060076000526020908101906000805160206126a88339815191526000925b8484106119ae575050505050565b600183826119be839451866108ab565b019201930192906119a0565b600060078152836000805160206126a883398151915292830192015b8281106119f4575050611981565b80611a01600192546106d6565b80611a0e575b50016119e6565b601f908181118414611a265750508281555b38611a07565b83611a4892611a3a85600052602060002090565b920160051c82019101610710565b60008181526020812081835555611a20565b6000198114610a905760010190565b634e487b7160e01b600052603260045260246000fd5b8051821015611a935760209160051b010190565b611a69565b60405190611aa582610489565b60006040838281528260208201520152565b9061058c60266040518094601760f91b6020830152611ae0815180926020602186019101610516565b8101641730b2323960d91b60218201520360068101855201836104f5565b60208183031261022d578051906001600160401b03821161022d57019080601f8301121561022d578151610612926020016105c3565b9091611b4b61061293604084526040840190610a0a565b916020818403910152610a0a565b9061058c602a6040518094601760f91b6020830152611b82815180926020602186019101610516565b81016805cc6dec8ca90c2e6d60bb1b602182015203600a8101855201836104f5565b9061058c60326040518094601760f91b6020830152611bcd815180926020602186019101610516565b81017005cc6e4cac2e8d2dedc86dec8ca90c2e6d607b1b60218201520360128101855201836104f5565b6020611c10918160405193828580945193849201610516565b8101600881520301902090565b60405163130d191f60e11b8152919060209083611c3d8260048301610d21565b03906000948381737109709ecfa91a80626ff3989d68f67f5b1dd12d948189875af1908115610180578691611f01575b5015611efa579084611c9392604051809481926360f9bb1160e01b835260048301610d21565b0381845afa918215610180578592611ede575b50604051630427c83360e31b8152858180611cc48660048301611940565b0381855afa908115610180578691611ebc575b50611ce181611964565b855b8151811015611eb357611cf68183611a7f565b5190611d00611a98565b611d0983611ab7565b90604051918a8380611d2a6385940ef160e01b948583528c60048401611b34565b03818a5afa92831561018057611d68611d5c611d9395611d75938f8092611e98575b50508c8082518301019101610ac8565b6001600160a01b031690565b6001600160a01b03168352565b8a611d7f86611b59565b604051809581928583528c60048401611b34565b03818a5afa90811561018057611dbe8c92611de0958491611e7e575b508b8082518301019101610a95565b8a840152611dcb86611ba4565b90604051948592839283528b60048401611b34565b0381895afa801561018057611e5694611e12611e1c92611e51958e8092611e5b575b50508b8082518301019101610a95565b6040840152611bf7565b815181546001600160a01b0319166001600160a01b039190911617815560208201516001820155604090910151600290910155565b611a5a565b611ce3565b611e7792503d8091833e611e6f81836104f5565b810190611afe565b388e611e02565b611e9291503d8086833e611e6f81836104f5565b38611daf565b611eac92503d8091833e611e6f81836104f5565b388f611d4c565b50505050509050565b611ed891503d8088833e611ed081836104f5565b8101906118a9565b38611cd7565b611ef39192503d8087833e61017281836104f5565b9038611ca6565b5050509050565b611f189150843d86116117815761177381836104f5565b38611c6d565b90604051611f2b81610489565b82546001600160a01b03168152600183015460208201526002909201546040830152565b60405190611f5c826104da565b600482526330b2323960e11b6020830152565b60405190611f7c826104da565b60088252670c6dec8ca90c2e6d60c31b6020830152565b60405190611fa0826104da565b601082526f0c6e4cac2e8d2dedc86dec8ca90c2e6d60831b6020830152565b906040805192611fce846104bf565b6000808552611fdb610646565b9381945b600790815487101561207a5750825261207461206e61200d876000805160206126a8833981519152016115ae565b6120678761202261201d84611bf7565b611f1e565b805161203f906001600160a01b0316612039611f4f565b866120e8565b506120566020820151612050611f6f565b86612149565b500151612061611f93565b83612149565b90896121bc565b95611a5a565b94611fdf565b95505094505090506120a161208d610646565b836020815191012090602081519101201490565b6114ee5761058c9161220f565b916120d8906120ca604093969596606086526060860190610a0a565b908482036020860152610a0a565b6001600160a01b03909416910152565b9060009161210a6040519485938493634b96303160e11b8552600485016120ae565b038183737109709ecfa91a80626ff3989d68f67f5b1dd12d5af190811561018057600091612136575090565b610612913d8091833e61017281836104f5565b604051630b604ad160e21b81526060600482015292600092849283929161218a91612178906064860190610a0a565b84810360031901602486015290610a0a565b906044830152038183737109709ecfa91a80626ff3989d68f67f5b1dd12d5af190811561018057600091612136575090565b6121ed9061210a6000936122009560405196879586956388da6d3560e01b8752606060048801526064870190610a0a565b6003199384878303016024880152610a0a565b91848303016044850152610a0a565b737109709ecfa91a80626ff3989d68f67f5b1dd12d91823b1561022d57612250926000928360405180968195829463e23cd19f60e01b845260048401611b34565b03925af18015610180576122615750565b61058c90610471565b9061058c602460405184612288829651809260208086019101610516565b8101630b9cdbdb60e21b60208201520360048101855201836104f5565b604051906122b2826104da565b601082526f52657573696e6720257320617420257360801b6020830152565b156122d857565b60405162461bcd60e51b815260206004820152601960248201527f4661696c656420746f206465706c6f7920636f6e7472616374000000000000006044820152606490fd5b6040519061232a826104da565b600f82526e4465706c6f7920257320617420257360881b6020830152565b60075490600160401b821015610484576001820180600755821015611a935761058c9160076000526000805160206126a8833981519152016108ab565b9290919261239e61239861201d83611bf7565b9361226a565b604051638d1cc92560e01b81529390600090856123be8260048301610d21565b038287737109709ecfa91a80626ff3989d68f67f5b1dd12d9281845afa968715610180578397612551575b5061243d91839161242261241498999a604051998a9161240e602084019e8f90610539565b90610539565b03601f1981018a52896104f5565b6040518080958194630fafdced60e21b835260048301610d21565b03915afa908115610180578291612537575b5080516020909101208451872083516001600160a01b0390811680159991978a9694959394909190871590869082612529575b8261251b575b505080612511575b6124fc5750516124e69493926124ac9290f096871615156122d1565b6124be86866124b961231d565b61257f565b6124c661059b565b6001600160a01b03871681529160208301526040820152611e1c84611bf7565b6124ef57509190565b6124f890612348565b9190565b9750505050505050816124f8916124b96122a5565b50803f1515612490565b604001511490508538612488565b602081015189149250612482565b61254b91503d8084833e611e6f81836104f5565b3861244f565b61241496975091839161242261257361243d953d8087833e611e6f81836104f5565b999850509150916123e9565b6111309061112261058c946040519485936395ed019560e01b6020860152602485016120ae565b60408051906125b482610489565b602f82526125ff6020927f2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d204465706c6f796d656e7473202d2d848201526e2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d60881b838201526110f4565b6007805492906000805b85811061261857505050505050565b6126a290838352611e5161117a611130612641846000805160206126a8833981519152016115ae565b61267261265061201d83611bf7565b918b5161265c816104da565b60058152641b5b39326d60d81b8c820152611086565b90518a5163319af33360e01b8b820152602481018c90529384926001600160a01b03909216916064840190610a0a565b61260956fea66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688a26469706673582212201a9837734f9701b25038bf6231031fc939b64274a9e413a6d8833f98aabdb2c264736f6c63430008130033";

type DeployContractsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeployContractsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeployContracts__factory extends ContractFactory {
  constructor(...args: DeployContractsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      DeployContracts & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DeployContracts__factory {
    return super.connect(runner) as DeployContracts__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployContractsInterface {
    return new Interface(_abi) as DeployContractsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DeployContracts {
    return new Contract(address, _abi, runner) as unknown as DeployContracts;
  }
}
