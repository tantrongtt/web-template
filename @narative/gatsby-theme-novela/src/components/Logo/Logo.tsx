import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

import { Icon } from '@types';

const Logo: Icon = ({ fill = "white" }) => {
  return (
    <LogoContainer>
      <svg
        width="160"
        height="32" 
        viewBox="0 0 480 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Desktop"
      >
        <g fill={fill} fillRule="evenodd">
          <path d="M30.3722628 0v80C10.1240876 80 0 70.9868607 0 52.9605821V21.5747667L30.3722628 0zm14.1459854 22.3498695C51.4117294 22.3498695 57 27.9609222 57 34.8825065c0 6.9215844-5.5882706 12.5326371-12.4817518 12.5326371-6.8934812 0-12.4817518-5.6110527-12.4817518-12.5326371 0-6.9215843 5.5882706-12.532637 12.4817518-12.532637z" opacity=".8" />
          <path d="M92.6398839 79.2302045c-2.7061353 0-5.2482243-.5112691-7.6263432-1.5338227-2.37811893-1.0225537-4.46235856-2.4268396-6.25278143-4.2128999-1.79042286-1.7860603-3.19813881-3.8652215-4.22319007-6.2375459C73.51251794 64.8736116 73 62.3377167 73 59.6381751V25.85064658L84.1525019 18v17.5060304h16.974764v11.1253278h-16.974764v13.0068169c0 1.1725282.2186744 2.2700526.6560296 3.2926062.4373552 1.0225537 1.0387095 1.9155704 1.8040812 2.6790771.7653716.7635067 1.6674031 1.3702128 2.7061217 1.8201364 1.0387187.4499235 2.1457574.674882 3.3211495.674882h8.487382v11.1253277h-8.487382zm26.9538322 0h-11.1935038v-43.805978h2.7061218l3.6901661 5.1945464c1.8040902-1.6360857 3.8541619-2.8972163 6.1502768-3.7834294 2.2961148-.8862132 4.674198-1.3293131 7.1343211-1.3293131h9.8814447v11.1253278h-9.8814447c-1.1753922 0-2.2824309.2181415-3.3211495.654431-1.0387186.4362895-1.9407502 1.0361787-2.7061218 1.7996854-.7653716.7635067-1.366726 1.6633404-1.8040812 2.699528-.4373552 1.0361877-.6560295 2.140529-.6560295 3.3130572v24.1321447zm66.1925979-22.2915574c0 3.2721716-.587687 6.3193356-1.763079 9.1415836-1.175392 2.822248-2.774448 5.262706-4.797216 7.3214473-2.022768 2.0587413-4.394018 3.6811687-7.1138202 4.8673309-2.7198027 1.1861622-5.6377382 1.7792344-8.753894 1.7792344-3.0888211 0-5.9930895-.5930722-8.7128921-1.7792344-2.7198027-1.1861622-5.097886-2.8085896-7.1343211-4.8673309-2.0364352-2.0587413-3.6423247-4.4991993-4.8177168-7.3214473-1.1753922-2.822248-1.7630794-5.869412-1.7630794-9.1415836 0-3.3267078.5876872-6.4079565 1.7630794-9.2438385 1.1753921-2.835882 2.7812816-5.283157 4.8177168-7.3418983 2.0364351-2.0587413 4.4145184-3.6743517 7.1343211-4.8468799 2.7198026-1.1725281 5.624071-1.7587834 8.7128921-1.7587834 3.1161558 0 6.0340913.5521707 8.753894 1.6565286 2.7198022 1.1043579 5.0910522 2.6722499 7.1138202 4.7037231s3.621824 4.4719312 4.797216 7.3214473c1.175392 2.8495161 1.763079 6.0193847 1.763079 9.5097011zm-11.275507 0c0-1.7996944-.293844-3.4289387-.88154-4.8877819-.587696-1.4588431-1.387224-2.7131568-2.3986079-3.7629785-1.0113839-1.0498217-2.1935919-1.8542185-3.5466596-2.4132144-1.3530677-.558996-2.7949515-.8384898-4.3256947-.8384898-1.5307432 0-2.972627.2794938-4.3256947.8384898-1.3530676.5589959-2.5284421 1.3633927-3.5261587 2.4132144-.9977165 1.0498217-1.7835774 2.3041354-2.3576061 3.7629785-.5740287 1.4588432-.8610387 3.0880875-.8610387 4.8877819 0 1.690622.28701 3.258514.8610387 4.7037231.5740287 1.4452091 1.3598896 2.6995228 2.3576061 3.7629785.9977166 1.0634558 2.1730911 1.9019372 3.5261587 2.5154693 1.3530677.6135322 2.7949515.9202937 4.3256947.9202937 1.5307432 0 2.972627-.2863107 4.3256947-.8589408 1.3530677-.57263 2.5352757-1.3770268 3.5466596-2.4132144 1.0113839-1.0361877 1.8109119-2.2905013 2.3986079-3.7629785.587696-1.4724772.88154-3.0949046.88154-4.8673309zm29.659954 22.2915574h-11.193504v-43.805978h2.706122l3.690166 4.2538018c1.80409-1.6360858 3.847328-2.8972163 6.129776-3.7834295 2.282447-.8862131 4.667364-1.329313 7.154822-1.329313 2.6788 0 5.207222.5112691 7.585341 1.5338227 2.378119 1.0225537 4.455525 2.4268396 6.232281 4.2128999 1.776755 1.7860603 3.177637 3.8720384 4.202689 6.2579968 1.025051 2.3859585 1.537569 4.9286703 1.537569 7.6282119v25.0319874h-11.193504V54.1982171c0-1.1452601-.218674-2.2291506-.656029-3.2517043-.437356-1.0225536-1.03871-1.9155703-1.804082-2.679077-.765371-.7635067-1.653736-1.3633959-2.66512-1.7996854-1.011383-.4362896-2.091088-.6544311-3.239145-.6544311-1.175392 0-2.282431.2181415-3.32115.6544311-1.038718.4362895-1.94075 1.0361787-2.706122 1.7996854-.765371.7635067-1.366726 1.6565234-1.804081 2.679077-.437355 1.0225537-.656029 2.1064442-.656029 3.2517043v25.0319874zm68.24269-22.2915574c0-1.5270134-.293844-3.0062855-.88154-4.4378605-.587696-1.4315751-1.387224-2.6995226-2.398608-3.8038805-1.011383-1.1043579-2.193591-1.9905577-3.546659-2.6586261-1.353068-.6680683-2.794952-1.0020975-4.325695-1.0020975-1.530743 0-2.972627.259043-4.325695.7771368-1.353067.5180939-2.528442 1.2815891-3.526158 2.2905087-.997717 1.0089196-1.783578 2.2564163-2.357606 3.7425275-.574029 1.4861113-.861039 3.1835248-.861039 5.0922916 0 1.8269625.28701 3.4698406.861039 4.9286838.574028 1.4588431 1.359889 2.7063398 2.357606 3.7425275.997716 1.0361877 2.173091 1.8337675 3.526158 2.3927635 1.353068.558996 2.794952.8384898 4.325695.8384898 1.530743 0 2.972627-.3340292 4.325695-1.0020975 1.353068-.6680684 2.535276-1.5542682 3.546659-2.6586262 1.011384-1.1043579 1.810912-2.3723053 2.398608-3.8038804.587696-1.4315751.88154-2.9108471.88154-4.4378605zm11.275508 16.7697955c0 3.0812949-.587688 5.9716698-1.76308 8.6712113-1.175392 2.6995416-2.781281 5.0581965-4.817717 7.0760357-2.036435 2.0178391-4.414518 3.6129988-7.134321 4.785527C267.254039 95.4137447 264.34977 96 261.260949 96l-5.617253-.0818039V84.7519664l5.535249.0818039c1.749421 0 3.23914-.2249584 4.469202-.674882 1.230061-.4499236 2.268764-1.0634466 3.11614-1.8405873.847376-.7771408 1.523899-1.6701575 2.029591-2.6790771.505692-1.0089196.908873-2.0723594 1.209555-3.1903513-.437356.7089705-1.066044 1.2884088-1.886085 1.7383324s-1.728906.8180374-2.726623 1.1043524-2.03642.4840058-3.11614.5930782c-1.079721.1090723-2.084256.1636077-3.013636.1636077-3.088821 0-5.993089-.5317199-8.712892-1.5951757-2.719803-1.0634557-5.097886-2.5836293-7.134321-4.5605663-2.036435-1.976937-3.642325-4.3969442-4.817717-7.2600944-1.175392-2.8631501-1.763079-6.0943711-1.763079-9.6937598 0-3.2994397.587687-6.3670545 1.763079-9.2029366 1.175392-2.835882 2.781282-5.2899739 4.817717-7.3623492s4.414518-3.6948027 7.134321-4.8673309c2.719803-1.1725281 5.624071-1.7587834 8.712892-1.7587834 1.421405 0 2.829121.17724 4.22319.5317252 1.39407.3544853 2.747117.8453036 4.059183 1.4724699 1.312066.6271662 2.562609 1.3633937 3.751669 2.2087047 1.189059.845311 2.302932 1.7587785 3.34165 2.74043l4.346196-5.1945464h2.706122v38.2024122zm41.7965.4090194c-.902045.8180429-1.865579 1.588355-2.89063 2.3109596-1.025052.7226046-2.097923 1.3497614-3.218645 1.8814893-1.120723.5317278-2.275597.954377-3.464656 1.2679601-1.18906.3135831-2.398602.4703723-3.628663.4703723-2.706136 0-5.248225-.4771845-7.626344-1.4315679-2.378119-.9543834-4.462358-2.3109508-6.252781-4.069743-1.790423-1.7587923-3.198139-3.8993057-4.22319-6.4216047-1.025051-2.5222989-1.537569-5.3513215-1.537569-8.4871526V35.4242265h11.152502v24.2139486c0 1.4724773.225507 2.7881432.67653 3.9470373.451023 1.1588941 1.059211 2.1337139 1.824582 2.9244887.765372.7907748 1.66057 1.3906639 2.685621 1.7996854 1.025051.4090214 2.125256.6135291 3.300649.6135291 1.148057 0 2.234595-.26586 3.259646-.7975879 1.025051-.5317278 1.920249-1.2338708 2.685621-2.1064499.765372-.8725791 1.366726-1.8610327 1.804081-2.9653906.437356-1.104358.65603-2.2427839.65603-3.4153121V35.4242265h11.193504v43.805978h-2.706122l-3.690166-5.1127425zm26.502812 21.8007341V84.6701626l6.23228.0818038c1.093388 0 2.145758-.1772399 3.157142-.5317252 1.011384-.3544852 1.947584-.8453036 2.808627-1.4724698.861043-.6271663 1.619569-1.3702107 2.275602-2.2291558.656033-.858945 1.189051-1.7928633 1.599072-2.8017829-1.230062.5180939-2.480605 1.0361799-3.751669 1.5542737-1.271063.5180939-2.548942.7771369-3.833672.7771369-2.706136 0-5.248225-.4771845-7.626344-1.4315679-2.378119-.9543834-4.462358-2.3109508-6.252781-4.069743-1.790423-1.7587923-3.198139-3.8993057-4.22319-6.4216047-1.025051-2.5222989-1.537569-5.3513215-1.537569-8.4871526V35.4242265h11.152502v24.2139486c0 1.5542815.225507 2.910849.67653 4.0697431.451023 1.1588941 1.059211 2.126897 1.824582 2.9040378.765372.7771407 1.66057 1.3565791 2.685621 1.7383324 1.025051.3817534 2.125256.5726272 3.300649.5726272 1.148057 0 2.234595-.26586 3.259646-.7975879 1.025052-.5317278 1.92025-1.2338708 2.685621-2.1064499.765372-.8725791 1.366726-1.8610327 1.804081-2.9653906.437356-1.104358.65603-2.2427839.65603-3.4153121V35.4242265h11.275507v38.2842161c-.027334 3.0812949-.628689 5.9716698-1.804081 8.6712113-1.175392 2.6995416-2.781282 5.0581965-4.817717 7.0760357-2.036435 2.0178391-4.407685 3.6129988-7.11382 4.785527C363.714785 95.4137447 360.81735 96 357.728529 96l-5.740258-.0818039zm55.163101-27.4042999c.437356.1363398.874704.2249604 1.312059.2658626.437356.0409021.874704.0613529 1.312059.0613529 1.093388 0 2.145759-.1499723 3.157143-.4499213 1.011383-.2999491 1.96125-.7294152 2.849628-1.2884112.888378-.5589959 1.681072-1.2406881 2.378107-2.045097.697035-.8044088 1.264221-1.6974256 1.701576-2.6790771l8.200369 8.22129c-1.038718 1.4724772-2.234593 2.7949601-3.587661 3.9674882-1.353068 1.1725282-2.815452 2.1677988-4.387197 2.9858417-1.571746.8180429-3.22547 1.4383827-4.961224 1.8610382-1.735753.4226555-3.519316.6339801-5.350741.6339801-3.088821 0-5.993089-.5726214-8.712892-1.7178815-2.719802-1.14526-5.097886-2.7404197-7.134321-4.785527-2.036435-2.0451072-3.642325-4.4787483-4.817717-7.3009963s-1.763079-5.9239474-1.763079-9.3051914c0-3.4630483.587687-6.6261 1.763079-9.4892501 1.175392-2.8631502 2.781282-5.3036082 4.817717-7.3214473 2.036435-2.0178392 4.414519-3.5857312 7.134321-4.7037232 2.719803-1.1179919 5.624071-1.6769795 8.712892-1.6769795 1.831425 0 3.621821.2181415 5.371242.654431 1.749421.4362896 3.409979 1.0634464 4.981724 1.8814893 1.571746.8180429 3.040964 1.8201304 4.407699 3.0062926 1.366735 1.1861622 2.569444 2.5154619 3.608162 3.9879392l-20.992945 25.2364971zm5.740259-23.0277924c-.51936-.1908766-1.031878-.3135812-1.53757-.3681174-.505691-.0545362-1.031877-.0818039-1.578571-.0818039-1.530743 0-2.972627.2794938-4.325694.8384898-1.353068.5589959-2.528442 1.3565758-3.526159 2.3927635-.997717 1.0361876-1.783577 2.2836843-2.357606 3.7425275-.574029 1.4588432-.861039 3.1017213-.861039 4.9286838 0 .4090214.020501.8725721.061503 1.390666.041002.5180938.109338 1.0429968.205009 1.5747247.095672.5317278.211842 1.042997.348516 1.5338227.136673.4908258.314346.9271088.533024 1.3088621l13.038587-17.2606188zm33.063107 33.7441007h-11.193504v-43.805978h2.706122l3.690166 4.2538018c1.80409-1.6360858 3.847328-2.8972163 6.129776-3.7834295 2.282447-.8862131 4.667364-1.329313 7.154822-1.329313 2.6788 0 5.207222.5112691 7.585341 1.5338227 2.378119 1.0225537 4.455525 2.4268396 6.232281 4.2128999 1.776755 1.7860603 3.177638 3.8720384 4.202689 6.2579968C473.487482 48.9559637 474 51.4986755 474 54.1982171v25.0319874h-11.193504V54.1982171c0-1.1452601-.218674-2.2291506-.656029-3.2517043-.437356-1.0225536-1.03871-1.9155703-1.804082-2.679077-.765371-.7635067-1.653736-1.3633959-2.665119-1.7996854-1.011384-.4362896-2.091089-.6544311-3.239146-.6544311-1.175392 0-2.282431.2181415-3.32115.6544311-1.038718.4362895-1.94075 1.0361787-2.706121 1.7996854-.765372.7635067-1.366726 1.6565234-1.804082 2.679077-.437355 1.0225537-.656029 2.1064442-.656029 3.2517043v25.0319874z" opacity=".8" fillRule="nonzero" />
        </g>
      </svg>

      <svg
        width="24"
        height="32"
        viewBox="0 0 72 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Mobile"
      >
        <path d="M37.2335766 0v96C13.0778589 96 1 85.1842328 1 63.5526985V25.88972L37.2335766 0zm16.8759125 26.8198433C62.3332912 26.8198433 69 33.5531066 69 41.8590078c0 8.3059012-6.6667088 15.0391645-14.8905109 15.0391645-8.2238022 0-14.890511-6.7332633-14.890511-15.0391645 0-8.3059012 6.6667088-15.0391645 14.890511-15.0391645z" opacity=".8" fill={fill} fillRule="evenodd" />
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
