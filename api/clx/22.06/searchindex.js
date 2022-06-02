Search.setIndex({docnames:["10min-clx","api","index","intro-clx-asset-classification","intro-clx-cybert","intro-clx-dga","intro-clx-loda-anomaly-detection","intro-clx-periodicity-detection","intro-clx-phishing-detection","intro-clx-predictive-maintenance","intro-clx-streamz","intro-clx-workflow"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,nbsphinx:4,sphinx:56},filenames:["10min-clx.ipynb","api.rst","index.rst","intro-clx-asset-classification.ipynb","intro-clx-cybert.ipynb","intro-clx-dga.ipynb","intro-clx-loda-anomaly-detection.ipynb","intro-clx-periodicity-detection.ipynb","intro-clx-phishing-detection.ipynb","intro-clx-predictive-maintenance.ipynb","intro-clx-streamz.ipynb","intro-clx-workflow.ipynb"],objects:{"clx.analytics":[[1,0,0,"-","anomaly_detection"],[1,0,0,"-","perfect_hash"],[1,0,0,"-","periodicity_detection"],[1,0,0,"-","stats"]],"clx.analytics.anomaly_detection":[[1,1,1,"","dbscan"]],"clx.analytics.asset_classification":[[1,2,1,"","AssetClassification"]],"clx.analytics.asset_classification.AssetClassification":[[1,3,1,"","load_model"],[1,3,1,"","predict"],[1,3,1,"","save_model"],[1,3,1,"","train_model"]],"clx.analytics.detector":[[1,2,1,"","Detector"]],"clx.analytics.detector.Detector":[[1,3,1,"","leverage_model"],[1,3,1,"","load_model"],[1,3,1,"","save_model"]],"clx.analytics.dga_dataset":[[1,2,1,"","DGADataset"]],"clx.analytics.dga_detector":[[1,2,1,"","DGADetector"]],"clx.analytics.dga_detector.DGADetector":[[1,3,1,"","evaluate_model"],[1,3,1,"","init_model"],[1,3,1,"","load_checkpoint"],[1,3,1,"","predict"],[1,3,1,"","save_checkpoint"],[1,3,1,"","train_model"]],"clx.analytics.loda":[[1,2,1,"","Loda"]],"clx.analytics.loda.Loda":[[1,3,1,"","explain"],[1,3,1,"","fit"],[1,3,1,"","load_model"],[1,3,1,"","save_model"],[1,3,1,"","score"]],"clx.analytics.model.rnn_classifier":[[1,2,1,"","RNNClassifier"]],"clx.analytics.model.rnn_classifier.RNNClassifier":[[1,3,1,"","forward"]],"clx.analytics.model.tabular_model":[[1,2,1,"","TabularModel"]],"clx.analytics.model.tabular_model.TabularModel":[[1,3,1,"","forward"]],"clx.analytics.periodicity_detection":[[1,1,1,"","filter_periodogram"],[1,1,1,"","to_periodogram"],[1,1,1,"","to_time_domain"]],"clx.analytics.stats":[[1,1,1,"","rzscore"]],"clx.dns":[[1,0,0,"-","dns_extractor"]],"clx.dns.dns_extractor":[[1,1,1,"","extract_hostnames"],[1,1,1,"","generate_tld_cols"],[1,1,1,"","parse_url"]],"clx.eda":[[1,2,1,"","EDA"]],"clx.eda.EDA":[[1,4,1,"","analysis"],[1,3,1,"","cuxfilter_dashboard"],[1,4,1,"","dataframe"],[1,3,1,"","save_analysis"]],"clx.features":[[1,1,1,"","binary"],[1,1,1,"","frequency"]],"clx.heuristics":[[1,0,0,"-","ports"]],"clx.heuristics.ports":[[1,1,1,"","major_ports"]],"clx.io.reader.dask_fs_reader":[[1,2,1,"","DaskFileSystemReader"]],"clx.io.reader.dask_fs_reader.DaskFileSystemReader":[[1,3,1,"","close"],[1,3,1,"","fetch_data"]],"clx.io.reader.fs_reader":[[1,2,1,"","FileSystemReader"]],"clx.io.reader.fs_reader.FileSystemReader":[[1,3,1,"","close"],[1,3,1,"","fetch_data"]],"clx.io.reader.kafka_reader":[[1,2,1,"","KafkaReader"]],"clx.io.reader.kafka_reader.KafkaReader":[[1,3,1,"","close"],[1,3,1,"","fetch_data"]],"clx.io.writer.fs_writer":[[1,2,1,"","FileSystemWriter"]],"clx.io.writer.fs_writer.FileSystemWriter":[[1,3,1,"","close"],[1,3,1,"","write_data"]],"clx.io.writer.kafka_writer":[[1,2,1,"","KafkaWriter"]],"clx.io.writer.kafka_writer.KafkaWriter":[[1,3,1,"","close"],[1,3,1,"","write_data"]],"clx.ip":[[1,1,1,"","hostmask"],[1,1,1,"","int_to_ip"],[1,1,1,"","ip_to_int"],[1,1,1,"","is_global"],[1,1,1,"","is_ip"],[1,1,1,"","is_link_local"],[1,1,1,"","is_loopback"],[1,1,1,"","is_multicast"],[1,1,1,"","is_private"],[1,1,1,"","is_reserved"],[1,1,1,"","is_unspecified"],[1,1,1,"","mask"],[1,1,1,"","netmask"]],"clx.osi.farsight":[[1,2,1,"","FarsightLookupClient"]],"clx.osi.farsight.FarsightLookupClient":[[1,3,1,"","query_rdata_ip"],[1,3,1,"","query_rdata_name"],[1,3,1,"","query_rrset"]],"clx.osi.slashnext":[[1,2,1,"","SlashNextClient"]],"clx.osi.slashnext.SlashNextClient":[[1,3,1,"","api_quota"],[1,3,1,"","download_html"],[1,3,1,"","download_screenshot"],[1,3,1,"","download_text"],[1,3,1,"","host_report"],[1,3,1,"","host_reputation"],[1,3,1,"","host_urls"],[1,3,1,"","scan_report"],[1,3,1,"","url_scan"],[1,3,1,"","url_scan_sync"],[1,3,1,"","verify_connection"]],"clx.osi.virus_total":[[1,2,1,"","VirusTotalClient"]],"clx.osi.virus_total.VirusTotalClient":[[1,3,1,"","domain_report"],[1,3,1,"","file_report"],[1,3,1,"","file_rescan"],[1,3,1,"","file_scan"],[1,3,1,"","ipaddress_report"],[1,3,1,"","put_comment"],[1,3,1,"","scan_big_file"],[1,3,1,"","url_report"],[1,3,1,"","url_scan"]],"clx.osi.whois":[[1,2,1,"","WhoIsLookupClient"]],"clx.osi.whois.WhoIsLookupClient":[[1,5,1,"","datetime_arr_keys"],[1,3,1,"","whois"]],"clx.parsers":[[1,0,0,"-","zeek"]],"clx.parsers.event_parser":[[1,2,1,"","EventParser"]],"clx.parsers.event_parser.EventParser":[[1,4,1,"","columns"],[1,4,1,"","event_name"],[1,3,1,"","filter_by_pattern"],[1,3,1,"","parse"],[1,3,1,"","parse_raw_event"]],"clx.parsers.splunk_notable_parser":[[1,2,1,"","SplunkNotableParser"]],"clx.parsers.splunk_notable_parser.SplunkNotableParser":[[1,3,1,"","parse"]],"clx.parsers.windows_event_parser":[[1,2,1,"","WindowsEventParser"]],"clx.parsers.windows_event_parser.WindowsEventParser":[[1,3,1,"","clean_raw_data"],[1,3,1,"","get_columns"],[1,3,1,"","parse"]],"clx.parsers.zeek":[[1,1,1,"","parse_log_file"]],"clx.utils.data":[[1,5,1,"","utils"]],"clx.utils.data.dataloader":[[1,2,1,"","DataLoader"]],"clx.utils.data.dataloader.DataLoader":[[1,3,1,"","get_chunks"]],"clx.utils.data.dataset":[[1,2,1,"","Dataset"]],"clx.utils.data.dataset.Dataset":[[1,4,1,"","data"],[1,4,1,"","length"]],"clx.workflow.splunk_alert_workflow":[[1,2,1,"","SplunkAlertWorkflow"]],"clx.workflow.splunk_alert_workflow.SplunkAlertWorkflow":[[1,4,1,"","interval"],[1,4,1,"","raw_data_col_name"],[1,4,1,"","threshold"],[1,4,1,"","window"],[1,3,1,"","workflow"]],"clx.workflow.workflow":[[1,2,1,"","Workflow"]],"clx.workflow.workflow.Workflow":[[1,3,1,"","benchmark"],[1,4,1,"","destination"],[1,4,1,"","name"],[1,3,1,"","run_workflow"],[1,3,1,"","set_destination"],[1,3,1,"","set_source"],[1,4,1,"","source"],[1,3,1,"","stop_workflow"],[1,3,1,"","workflow"]],clx:[[1,0,0,"-","features"],[1,0,0,"-","ip"]]},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","property","Python property"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:property","5":"py:attribute"},terms:{"0":[0,1,3,4,5,6,7,8,9,10,11],"00":[0,5,8,9],"000":3,"001":[1,5,7],"008297920227051":8,"01":[0,1,3,8],"010":1,"02":0,"0204e88255a0bd7807547e9186621f0478a6bb2c43e795fb5e6934e5cda0e1f6":1,"02056777":6,"02558101":6,"02567385":6,"02575712":1,"02624528":6,"02671958":1,"02682423":6,"02687294":6,"02690199":6,"02698976":6,"027":1,"02701243":1,"02702433":1,"02723573":6,"02723952":6,"02729784":1,"02741364":1,"02764062":6,"02768341":6,"02784846":6,"02793043":6,"02801463":1,"02801801":6,"02804974":6,"0280996":6,"02825058":6,"02830444":6,"02833189":6,"0283537":6,"02850823":6,"02853553":1,"02867007":6,"02880341":1,"02900435":6,"02943411":1,"02957329":6,"02957526":6,"02978938":7,"02982849":6,"03":0,"03002908":6,"03019965":6,"03023409":6,"0303004":6,"03035922":6,"03041431":6,"03054152":6,"03064191":1,"03077545":6,"03089883":6,"03119239":6,"03119756":6,"03123753":6,"03141498":6,"03173637":6,"03176134":6,"03178023":6,"03211476":6,"03226991":6,"03272659":6,"03299722":6,"03367996":6,"03387718":6,"03397416":6,"03418276":6,"03418612":1,"03478368":6,"03489112":6,"03489721":6,"03506116":6,"03517688":6,"03538646":1,"03542846":1,"03556855":6,"03572989":7,"03588215":6,"03645494":6,"03647531":6,"03678122":6,"03682993":6,"03731448":6,"03731833":6,"0374672":6,"03750692":1,"03772923":6,"03811418":6,"03835835":6,"03853022":6,"03861408":6,"03877292":6,"03888111":6,"03888511":6,"03937519":6,"03943715":1,"03952834":6,"03957355":1,"03982241":6,"04":[0,1,10],"04040502":1,"0408617":6,"04086408":1,"04095682":6,"04122395":6,"04183939":6,"04200487":6,"04248549":6,"04252361":6,"04295848":1,"04298807":6,"04316542":6,"04331623":6,"04337963":6,"04340439":6,"04348805":6,"04350974":6,"04365477":1,"04377521":6,"04422376":6,"04528412":7,"04578249":6,"04587308":1,"04596247":6,"04691529":6,"04884918":1,"04894868":6,"05":[0,5],"05050418":1,"05147795":6,"05257185":6,"05344218":6,"05591206":6,"05606504":1,"05631182":6,"05657488":7,"06":[8,9],"06865704":7,"07":9,"072371":9,"074966331":[0,1],"08107234":7,"09357597":7,"0a0":1,"1":[0,1,3,4,5,6,7,8,9,10,11],"10":[1,2,8,9,10,11],"100":[0,1,5,6,8,9],"1000":[1,3,4],"10000":1,"1021":9,"104":1,"10602009":7,"107":[0,1],"109":4,"11":[0,1],"110":1,"111407599":[0,1],"11830457":7,"12":[0,1,9],"123":1,"127":1,"128":[1,5],"13":[0,1,5],"130":[0,1],"13035481":7,"131":0,"137":1,"1374184718":1,"138":0,"1386638408":1,"14":[0,1,3],"1400":9,"14211096":7,"1428433465":1,"15":[0,1,3,9],"151":1,"15352238":7,"1538014110":1,"156":1,"1561176503":1,"1564909243":1,"1585596973":[0,1],"158832461":[0,1],"16":[0,1,10],"1605914280":1,"1605914572":1,"1617721627":9,"16454466":7,"167772161":1,"168":1,"169":[1,4],"17":[0,1,3,9],"17206949":6,"17513786":7,"178":[0,1],"18":[0,1,3,8,10],"183":9,"18526557":7,"189":4,"19":[0,1],"192":1,"193":0,"19489424":7,"1993":0,"1m":5,"1s":10,"2":[0,1,3,4,5,6,7,8,9,10,11],"20":[0,1,3,8,10],"200":[1,4],"2000":1,"2009":8,"200mb":1,"201":1,"2010":8,"2019":0,"2022":0,"2024":0,"20399289":7,"207":1,"20make":8,"20possibl":8,"20tc20061204_923336":8,"21":[0,1],"21253286":7,"2181":10,"22":[0,1,3],"22048766":7,"224":[0,1],"22783294":7,"228914145":[0,1],"23":[0,1],"23454643":7,"239":0,"24":[0,1,3],"24060791":7,"241754521":0,"24599927":7,"247":4,"248":4,"25":3,"25070444":7,"254":1,"25470949":7,"255":[0,1],"25532":1,"256":1,"25800256":7,"26057394":7,"26241606":7,"26352351":7,"26389302":7,"27":1,"2788":0,"282966989":[0,1],"2880":1,"28shuttl":6,"29":[0,6,8],"296828498":[0,1],"3":[0,1,3,4,5,6,7,8,9,10,11],"30":[0,1],"3050763":7,"3070180":7,"30k":8,"3124102":7,"3129990":7,"3132360":7,"3140470":7,"3142354":7,"3167370":7,"3169477":7,"3169950":7,"3208453":7,"3220011":7,"3232235521":1,"3238560":7,"3248874":7,"3252652":7,"3265208":7,"3267010":7,"3274342":7,"3277141":7,"327849973":[0,1],"3287715":7,"3287878":7,"3289964":7,"3293116":7,"3296710":7,"32mb":1,"3303107":7,"3317385":7,"3320150":7,"3331894":7,"3341009":7,"3358306":7,"3358863":7,"3368779":7,"3370349":7,"3373505":7,"3396623":7,"3397645":7,"34":[0,1],"3400068":7,"3401678":7,"3421738":7,"3426017":7,"3427957":7,"3428817":7,"3429917":7,"3432514":7,"3436093":7,"3440332":7,"3441179":7,"3447954":7,"3449529":7,"3459938":7,"3461276":7,"3464402":7,"3469016":7,"3471284":7,"3475452":7,"3489523":7,"3495044":7,"3499711":7,"3509973":7,"3512986":7,"3522923":7,"3523530":7,"3525937":7,"3528452":7,"3538":[0,5],"3549195":7,"3549270":7,"3557773":7,"3559319":7,"3562267":7,"3583376":7,"3584702":7,"3588528":7,"3596828":7,"3597":1,"3599137":7,"3599792":7,"360593742":[0,1],"3612960":7,"3623178":7,"3625685":7,"3625813":7,"3628979":7,"3630503":7,"3641894":7,"3654410":7,"3654968":7,"3655766":7,"3679797":7,"3680456":7,"3694398":7,"371":9,"3711087":7,"3725934":7,"3729805":7,"3737379":7,"3738450":7,"3738718":7,"374423424":[0,1],"3746871":7,"3749848":7,"3753407":7,"3758781":7,"3765678":7,"3769181":7,"3773181":7,"3774912":7,"3789411":7,"38":3,"3801183":7,"3808679":7,"3809061":7,"3829441":7,"3829668":7,"3837029":7,"384311":9,"384315":9,"3844070":7,"384418":9,"3855161":7,"3864117":7,"39":[0,8,9],"3909898":7,"3928100":7,"3945531":7,"3955022":7,"3978103":7,"3dip":8,"4":[0,1,3,4,5,6,7,8,9,11],"4010556":7,"4036471":7,"42":0,"43":[0,1],"44":0,"446":3,"449":4,"4494":4,"45":[0,1],"451712":8,"46":1,"4770":0,"4x":5,"5":[0,1,3,4,5,6,8,9,11],"500":10,"5156":0,"523229":9,"57":9,"570321249":[0,1],"5728906989097595":1,"58":0,"59":0,"593":3,"6":[0,1,3,4,5,6,8,9],"60":[1,10],"6023843884468079":3,"632572":8,"645941275":[0,1],"654834":9,"67":9,"68":[8,9],"683973734":[0,1],"686871":9,"686944":9,"69850349":1,"7":[0,1,3,8,9,10],"7000":1,"7066":9,"70c0942965354dbb132c05458866b96709e37f44":1,"731227911":3,"7312701099999999":3,"7313123099999999":3,"7313545099999998":3,"7313967099999996":3,"7314389099999998":3,"7314811099999998":3,"7315233099999996":3,"731565509":3,"731607709":3,"731649909":3,"731692109":3,"7317343089999997":3,"731776509":3,"731818709":3,"7318609079999998":3,"7319031079999998":3,"7319453079999998":3,"731987508":3,"7320297079999998":3,"74":[0,1],"75":1,"755a7458c8a3":1,"75efd85cf6f8a962fe016787a7f57206ea9263086ee496fc62e3fc56734d4b53":1,"7680":1,"7750718":6,"78774349":1,"7893539071083069":3,"79":[0,1],"795223674":[0,1],"8":[0,1,3,4,5,8,9],"8204":1,"8205":1,"8206":1,"8207":1,"8208":1,"8209":1,"84":[0,1],"847751909":[0,1],"8787":10,"880026019":[0,1],"8888":10,"89088434":[0,1],"9":[0,1,3,7,8,9],"90":1,"9092":[10,11],"91081035":1,"924":1,"932":3,"934372308":[0,1],"94":[0,1],"95051":0,"950835449":[0,1],"96":8,"97":[0,1],"9787":10,"98":[0,1],"9852845668792725":9,"9888":10,"9899":1,"99":7,"99017f6eebbac24f351415dd410d522d":1,"99822":4,"999579":4,"999628":4,"999629":4,"999751":4,"999866":4,"999936":4,"abstract":1,"boolean":1,"case":[0,1,7,10],"class":[0,1,11],"default":1,"do":10,"float":1,"function":[0,1,7,11],"import":[0,1,3,4,5,6,7,8,9,11],"int":[1,7],"new":[0,3,5,6,8,9,11],"null":1,"public":0,"return":[0,1,4,5,7,8,9,11],"short":0,"static":[0,5],"true":[0,1,4,5,8,9],"try":[0,9],"while":[1,6,10],A:[0,1,6,10],And:1,As:11,FOR:8,For:[4,5,6,7,10,11],IS:[8,9],If:[1,11],In:[0,3,6,8,10,11],It:[1,8,11],NOT:[8,9],Not:8,OF:8,One:4,The:[0,1,3,5,6,7,8,9,10,11],Then:11,There:[8,9],To:[0,5,6,7,8,9,10,11],Will:5,_function:[8,9],_raw:1,a23:0,a354494a73382ea0b4bc47f4c9e8d6c578027cd4598196dc88f05a22b5817293:1,abedin:8,abil:[0,10],abl:[8,9],about:[0,1],abov:[5,10,11],abus:0,ac:[0,1,2],acceler:[0,9],accept:[0,1],access:1,accomplish:7,account:[0,8],account_for_which_logon_failed_account_domain:[0,3],account_for_which_logon_failed_account_nam:0,account_for_which_logon_failed_security_id:0,account_information_account_domain:0,account_information_account_nam:0,account_information_logon_guid:0,account_information_security_id:0,account_information_supplied_realm_nam:0,account_information_user_id:0,account_locked_out_account_nam:0,account_locked_out_security_id:0,account_whose_credentials_were_used_account_domain:0,account_whose_credentials_were_used_account_nam:0,account_whose_credentials_were_used_logon_guid:0,accuraci:[1,3],achiev:9,across:[1,6,8],action:[1,9],activ:10,actual:8,add:[1,10],addit:0,additional_information_caller_computer_nam:0,additional_information_expiration_tim:0,additional_information_failure_cod:0,additional_information_pre_authentication_typ:0,additional_information_privileg:0,additional_information_result_cod:0,additional_information_ticket_encryption_typ:0,additional_information_ticket_opt:0,additional_information_transited_servic:0,addr:1,addr_col:1,addrconf:9,address:[0,1,5],adjust:1,administr:4,advanc:[5,11],advantag:5,after:1,afterward:1,against:1,aggreg:11,aidetectvm:1,ajeetenterpris:1,akamaitechnolog:0,alert:[1,11],alert_data:0,alert_data_output:0,alexa:5,algorithm:[5,6],alia:1,all:[1,8,9,10],allow:[1,10],along:[8,9,10],alreadi:[1,8],also:[0,1,5,8,9,10,11],although:1,alwai:4,am:[0,8],amazonaw:5,amount:9,an:[0,1,2,3,5,6,8,9,10],analys:8,analysi:[2,9],analyst:[0,9],analyt:[0,2,3,4,5,6,7,8,9],analyz:9,anamoli:11,ani:[0,1,4,9,10],anomali:[1,2,7],anomaly_detect:1,anon:4,anoth:[8,9],antiviru:1,apach:2,api:[0,2,10,11],api_kei:[0,1],api_quota:1,apikei:[0,1],apparmor:9,apparmor_pars:9,appli:[0,1,7],applic:6,application_information_application_nam:0,application_information_process_id:0,approach:[9,10],approv:8,apr:9,ar:[1,2,5,6,8,9,10,11],architectur:[8,9,10],archiv:6,arduou:4,area:6,arg:1,argument:[1,2],around:11,arr2str:1,arrai:[1,6,7],arrest:8,ascii:1,ask:[8,9],asn:1,ass:7,assess:8,assest:3,asset:[1,2],asset_classif:[1,3],asset_classifi:3,assetclassif:[1,3],assist:8,associ:[1,5,8,9,11],attn:8,attribut:[1,11],attributes_account_expir:0,attributes_allowed_to_delegate_to:0,attributes_display_nam:0,attributes_home_directori:0,attributes_home_dr:0,attributes_logon_hour:0,attributes_new_uac_valu:0,attributes_old_uac_valu:0,attributes_password_last_set:0,attributes_primary_group_id:0,attributes_profile_path:0,attributes_sam_account_nam:0,attributes_script_path:0,attributes_sid_histori:0,attributes_user_account_control:0,attributes_user_paramet:0,attributes_user_principal_nam:0,attributes_user_workst:0,audit:[0,9],autocorrel:7,aux:10,avail:[0,5,11],averag:10,avg:10,avoid:[1,11],awk:10,azeez:8,b:[0,1,6,10],ba57:1,back:[1,10],bailiwick:1,bambenekconsult:5,base:[1,4,6,8,9],base_url:1,bash:10,basic:[0,1,11],batch:[1,5,10],batch_siz:[1,3,11],batchsiz:[1,3],becaus:[7,8],becom:9,been:6,befor:[1,8,9,11],begin:[10,11],behavior:[0,4,5],being:1,below:[0,3,5,6,8,9,10,11],benchmark:[1,2,6],benefici:0,benefit:9,benign:[1,5,8],bert:[4,8,9],bertforpretrain:[8,9],bertforsequenceclassif:[8,9],best:[8,10],better:10,between:1,bia:[8,9],bidirect:[1,8,9],bin:[1,4,6,10],binari:1,binary_sequence_classifi:[8,9],binarysequenceclassifi:[8,9],bind:10,bit:1,bitdefend:1,biz:5,bkav:1,block:[1,5,9,10],blogspot:0,board:8,bool:[0,1,8,9],bootstrap:10,both:[0,5],broker:[10,11],buffer:10,build:[0,1,2,5],businessweek:8,c1:1,c2:1,c3:1,c5:1,c6:1,c:[1,10],ca:0,cafil:10,calcul:[0,1],call:[1,5,10],came:8,can:[0,1,3,4,5,6,7,8,9,10,11],capabl:[5,9],captur:[1,2],care:1,cat_col:[1,3],categor:[1,3],categori:1,caus:[6,9],ce:10,cento:10,centr:3,certificate_information_certificate_issuer_nam:0,certificate_information_certificate_serial_numb:0,certificate_information_certificate_thumbprint:0,chain:7,chang:[8,11],changed_attributes_account_expir:0,changed_attributes_allowedtodelegateto:0,changed_attributes_display_nam:0,changed_attributes_home_directori:0,changed_attributes_home_dr:0,changed_attributes_logon_hour:0,changed_attributes_new_uac_valu:0,changed_attributes_old_uac_valu:0,changed_attributes_password_last_set:0,changed_attributes_primary_group_id:0,changed_attributes_profile_path:0,changed_attributes_sam_account_nam:0,changed_attributes_script_path:0,changed_attributes_sid_histori:0,changed_attributes_user_account_control:0,changed_attributes_user_paramet:0,changed_attributes_user_principal_nam:0,changed_attributes_user_workst:0,char_vocab:[1,5],charact:1,charg:8,chart:1,check:1,checkpoint:[1,2],choos:7,chunk:1,cicril:0,circumv:5,citi:0,ckpt:[8,9],cl:[8,9],claim:8,clara:0,clash:1,classif:[1,2,4,8,9],classifi:[1,3,8,9],classmethod:1,clean:1,clean_raw_data:1,click:8,client:1,clientdeleteprohibit:0,clienttransferprohibit:0,clintonemail:8,close:1,closest:1,cloud:1,cluster:[1,10],clx:1,clx_asset_classifi:3,clx_dev:[0,4,5,8,9],clx_dga_classifi:5,clx_pd_classifi:8,clx_pdm_classifi:9,clx_streamz:10,clx_streamz_hom:10,cmake:9,cname:1,cnn:0,co:[0,4,5],coatingb6:8,code:[0,1],col_delimit:10,col_len:1,collect:0,column:[0,1,3,5,8,9,10,11],com:[0,1,5,8],combin:1,comm:9,comma:1,command:[5,10],comment:1,common:0,commonli:0,commun:5,compat:10,compon:[2,10],comput:[1,6,10],computernam:0,concat:1,concept:7,conclus:2,conda:[0,1,4,5,8,9],conf:10,confid:7,confidence_df:4,confidenti:8,config:[0,1,4,10,11],config_filenam:4,configur:[0,1,2,10],conjunct:5,conn:1,connect:[0,1,11],consid:6,consol:10,consortium:8,construct:1,constructor:1,consum:[1,4,10,11],consumer_conf:10,consumer_kafka_top:11,cont1:3,cont_col:[1,3],contain:[0,1,2,5,8,9],content:8,continu:[1,3],contract:8,contribut:[1,6],control:5,conveni:10,converg:1,convert:[1,5],cooper:8,copi:5,core:[0,4,5,10],correct:9,correspond:1,correspondingto:1,could:[3,5,9],countri:0,cover:3,coverag:8,cp:[1,6],cpu:5,creat:[0,1,2,3,5,8,9,11],creation_d:[0,1],criterion:1,cross:1,crucial:7,csv:[0,5,10,11],cuda:[1,10],cudf:[0,1,3,4,5,7,8,9,10,11],cudf_engin:10,cuml:[1,3,8,9],cupi:[1,6],current:[1,4],custom:[2,8],customworkflow:11,cut:6,cuxfilt:1,cuxfilter_dashboard:1,cyber:[2,7,11],cybersecur:0,cybert:2,cybert_apache_pars:4,cybert_workflow:10,cypars:4,d:[1,10],dai:1,dashboard:[1,10],dask:[1,10],dask_f:11,dask_fs_read:1,daskfilesystemread:1,data:[2,3,4,5,6,7,10,11],data_filepath:10,databas:1,datafram:[0,1,3,5,8,9,11],dataload:1,dataset:[1,3,4,5,6,8,9],dataset_len:1,date:5,date_rang:1,datetim:1,datetime64:1,datetime_arr_kei:1,datetime_format:1,dave:8,dbscan:1,dd:[1,5],dec2006:8,decid:0,decim:1,declar:11,decod:[8,9],decor:1,def:[0,11],defin:[0,1],deleg:1,delimit:[0,1,10,11],demonstr:[0,3,5,6,8,9,10],dens:[8,9],depend:[1,11],deploi:[0,9,11],deprec:[0,5],depth:[4,5,6,7],dest:11,destin:[0,1,11],detail:[1,3,5,8,9],detailed_authentication_information_authentication_packag:[0,3],detailed_authentication_information_key_length:[0,3],detailed_authentication_information_logon_process:[0,3],detailed_authentication_information_package_name_ntlm_onli:[0,3],detailed_authentication_information_transited_servic:0,detect:[0,1,2,10],detector:[1,2,5,8],determin:[1,10,11],develop:[5,6,11],devic:[9,10],df:[0,1,8,9],dga:[0,1,2],dga_dataset:1,dga_detect:10,dga_detector:[1,5],dga_prob:1,dgadataset:1,dgadetector:[1,5],dgadomain:1,dgx:9,dict:1,dictionari:[0,1,11],differ:[0,1,3,4,5,7,11],dimens:[8,9],dimension:[1,6],directli:[0,10],directori:1,dirpath:[0,1],disabl:9,disclos:0,discov:7,discret:7,distanc:1,distinguish:[1,11],dn:[0,2],dns1:0,dns2:0,dns_extractor:[0,1],dnsdb:[0,1],dnsmadeeasi:0,dnssec:0,docker0:9,docker2:10,docker:2,dockerfil:10,document:[10,11],domain:[0,1,2,5,6],domain_nam:[0,1],domain_report:1,domainnam:1,don:1,done:[1,5],down:[8,9],download:[1,2],download_html:1,download_screenshot:1,download_text:1,dr:8,drive:1,driver:10,drop:1,dt:9,dtype:[0,1,3,5,8,9,11],duiwlqeejymdb:5,duplic:1,e:[0,1,3,8,9],each:[1,6,9,10,11],easi:5,easili:[5,7],eda:1,edu:6,effort:5,egg:1,either:[1,5,8,9],elasticsearch:10,elasticsearch_conf:10,email:[0,8],emb_drop:1,emb_sz:1,embassi:8,embed:1,enabl:5,enclos:1,encod:[8,9],end:0,endpoint:1,energi:1,engin:[0,1,10],eno1:9,enorm:9,enrich:[1,11],ensembl:[1,6],enter:9,entiti:[1,4],entity_id:1,entrypoint:10,env:[0,1,4,5,8,9],environ:[5,10,11],environmetn:0,ep:1,eph_min:1,ephemer:1,epoch:[1,3,5,8,9],epp:0,equal:[1,4],escap:1,esepci:5,establish:11,estim:10,etc:[0,1,6,11],eth0:9,etl:4,evalu:[1,2],evaluate_model:[1,8,9],even:9,event:[0,1,3],event_nam:1,event_pars:1,event_regex:1,eventcod:[0,1,3],eventpars:1,everi:1,ex:10,exactli:[8,9],exampl:[0,1,2,3,4,5,6,7,8,9],exec:10,execut:[0,1,8],exercis:8,exist:5,expand:[0,3,5],expans:5,expect:[8,9],experi:[4,6,8],expiration_d:[0,1],explain:[1,6],explan:2,explor:1,exploratori:2,express:[1,9],expresswai:0,extended_info:1,extens:10,extern:2,extract:[1,2,4],extract_hostnam:1,extractor:2,f:[0,8,10],facebook:5,failur:9,failure_information_failure_reason:0,failure_information_statu:0,failure_information_sub_statu:0,fals:[0,1,5,8],farsight:[0,1],farsightdb:0,farsightlookupcli:[0,1],farsightsecur:[0,1],fastai:1,featur:[0,2,3,6,7],feature_datafram:1,feature_df:1,feature_explan:6,feature_id:1,feder:8,feed:[5,11],fetch:1,fetch_data:1,field:7,file:[0,1,2,10],file_extens:10,file_path:1,file_report:1,file_rescan:1,file_scan:1,filel_path:1,filepath:[1,10],filesystem:10,filesystemread:1,filesystemwrit:1,filter:[0,1,8],filter_by_pattern:1,filter_information_filter_run_time_id:0,filter_information_layer_nam:[0,3],filter_information_layer_run_time_id:0,filter_periodogram:[1,7],find:[1,7,11],fine:[4,8,9],first:[0,3,5,6,8,9,11],firstli:11,fit:[1,6],flag:[1,10],flexibl:1,float32:[8,9],fname:1,follow:[0,1,10,11],foreign:8,forens:1,forest:6,form:1,format:[1,6,10,11],former:1,forum:0,forward:1,found:[1,7,8,9,10,11],fourier:7,fraud:8,fraudster:8,freed:8,freq:1,frequenc:[1,7],from:[0,1,3,4,5,6,7,8,9,10,11],fs:[0,4,11],fs_api_kei:0,fs_client:0,fs_reader:1,fs_writer:1,ftp:0,full:11,fundament:7,futur:[0,5],futurewarn:[0,5],fw:8,g5e2f1f8:1,g:[0,8,9],gate:5,gather:[8,9],gaussian:6,gdf:1,gear:0,gener:[1,3,5,6,9,11],generate_tld_col:1,get:[0,1,2,4,7],get_chunk:1,get_column:1,get_hostname_split_df:1,getcwd:0,github:[0,1],given:[0,1,5,10],global:1,gmail:[0,1],go:[8,11],goe:0,good:6,googl:[0,1,5,8],gov:8,gpu:[0,1,5,6,9,10,11],greater:1,grep:10,group:[10,11],group_group_domain:0,group_group_nam:0,group_id:11,group_security_id:0,gru:5,gt:0,gui:1,guid:[10,11],h:[1,8],ha:[0,6,10],hacker:8,handl:[1,8,11],hanleymr:8,happen:9,has_data:1,hash:1,have:[1,6,8,11],head:0,header:[0,1,11],help:9,henc:7,her:8,here:[0,6,8,9,10,11],heurist:2,hidden:1,hidden_s:[1,5],high:1,histogram:[1,6],hold:[1,10],hook:1,hope:10,host:[1,10],host_report:1,host_reput:1,host_url:1,hostmask:1,hostmast:0,hostnam:[0,1],hostname_split:1,hostname_split_df:1,hour:[1,9],how:[0,2,3,10,11],howev:9,hre:8,hrod17:8,html:1,htmtoni:8,http:[0,1,4,5,6,8,10],http_proxi:1,https_proxi:1,huge:8,huggingfac:[4,8,9],huma:8,i:[0,2,3,8,10],iana:1,ic:6,icann:0,id:[0,1,10,11],ideal:[3,5,6,8,9],ident:[8,9],identifi:[6,7,8,9],idp:0,ifft:7,ignor:1,illustr:4,imag:2,immedi:1,impersonation_level:3,implement:[1,5,6,9,10,11],improv:3,inbound:0,inc:8,includ:[0,1,7,10],increas:[8,10,11],index:[1,2,4,10],indic:[0,1,11],industri:7,inf:6,infer:[4,8,9,10],infer_df:[8,9],inferenc:[2,10],infinit:9,info:[0,1,5],inform:[0,1,8,10,11],ingest:10,init_model:[1,5,8,9],initi:[2,5,6,8,9],input:[0,1,2,7,8,9,10,11],input_addr_col:1,input_data:1,input_df:[0,1],input_format:[0,1,11],input_ip:1,input_log:4,input_mask:1,input_path:[0,1,11],input_port_col:1,input_s:1,input_top:10,instal:10,instanc:[1,2,3,8,9,10],instanti:[0,1,11],instead:[1,8,9],institut:8,int16:1,int32:1,int64:[0,1,3,5],int_to_ip:1,integ:1,integr:[2,11],intellig:[1,2],interest:[1,6],interested_eventcod:1,interv:[1,7,10],introduct:[0,2,5,8,11],involv:8,io:[0,1,11],ip:[0,2,5,8],ip_to_int:[0,1],ipaddress_report:1,ipv4:1,ipv6:[1,9],is_glob:1,is_ip:1,is_link_loc:1,is_loopback:1,is_multi:1,is_multicast:[0,1],is_priv:1,is_reg:1,is_reserv:1,is_unspecifi:1,isol:6,itself:1,jilotylc:8,join:0,js:1,json:[4,10],json_resp:1,june:8,jupyt:[4,5,6,7],just:4,kafka:[0,1,10],kafka_brok:11,kafka_conf:10,kafka_hom:10,kafka_read:1,kafka_top:1,kafka_topic_setup:10,kafka_writ:1,kafkaread:1,kafkawrit:1,kb:10,kbrad:1,keep:[1,5],kei:[0,1],kernel:9,keyword:[1,3],kg:0,kill:10,know:[7,8,11],known:9,kofsmyaiufarb:5,label:[1,3,4,8,9,10],label_col:1,label_fil:10,label_map:10,lack:8,lago:8,languag:[4,8],larg:5,larger:[1,3,5,6,8,9],latest:[1,10],latter:1,layer:[1,4,8,9],layernorm:[8,9],learn:[1,2,8,9],least:1,left:1,legaci:10,legitim:[1,8],len:[1,7],length:1,less:10,let:[0,2,3,5,8,9,11],leverag:1,leverage_model:1,lib:[0,1,4,5,8,9],librari:[2,5,8,9],lightspe:0,lightweight:[1,6],like:[1,9,11],likelihood:[1,6],limit:[0,1],line:[6,11],linear:1,link:[1,9],linkedin:5,linux:9,list:[0,1,5,11],listbox:8,listnam:8,ll:0,load:[1,2,3],load_checkpoint:[1,5],load_model:[1,3,4],local:[1,9,11],localhost2:10,localhost:[1,10],locat:[0,1,11],lock:8,loda:[1,2],loda_ad:[1,6],log:[1,2,3,5,6,9],logon_typ:[0,3],logparseworkflow:0,look:[0,1,11],lookup:1,loopback:1,loss:[1,3,5,8,9],lower:1,lpw:0,lr:[1,3,5],lt:[0,5,8,9],ltd:[0,1],m:[1,8],machin:[2,3,8,9],mai:[1,8,11],mainli:0,maintain:9,mainten:2,major:1,major_port:1,malici:[1,5,8],malwar:5,malware1:1,man:8,manag:[7,8],mandatori:1,mani:[6,7,9],manual:9,mask:1,match:[0,1,5],max:[1,10],max_batch_s:10,maximum:[1,11],mb:10,md5:1,mdl:1,me:8,mean:1,measur:6,medium:1,member:8,member_account_nam:0,member_security_id:0,memori:5,messag:[1,3,10,11],method:[1,5,8],microsoft:0,might:[9,11],min_conn:1,min_sampl:1,minimum:1,ministri:8,minut:[1,2],miss:6,mixtur:6,ml:[0,6,10],mnemon:1,mode:[1,9],model:[1,2,10],model_fil:10,model_filenam:4,modul:[0,1,2,7,9],modular:11,monei:8,monica:8,month:8,more:[0,5,10,11],moreov:9,most:[1,4],mpr:8,ms:10,mto:8,multi:10,multicast:1,multipl:1,multivari:1,must:[1,11],my:[0,8],my_new_workflow:11,n:[0,1,6],n_bin:[1,6],n_cont:1,n_domain_typ:[1,5],n_layer:[1,5],n_partit:10,n_random_cut:[1,6],na:0,name:[0,1,3,4,5,6,8,9,10,11],name_serv:0,nameserv:1,nan:4,napplic:0,narrow:9,ncomputernam:0,ndarrai:1,necessari:0,need:[0,1,5,8,9,10,11],neg:[1,6],nest:1,net:[0,1,5,8],net_mask:1,netbio:1,netdev_chang:9,netmask:1,netscap:8,network:[1,5],network_information_client_address:0,network_information_client_port:0,network_information_destination_address:0,network_information_destination_port:0,network_information_direct:[0,3],network_information_network_address:0,network_information_port:0,network_information_protocol:[0,3],network_information_source_address:0,network_information_source_network_address:0,network_information_source_port:0,network_information_workstation_nam:[0,3],neural:5,neventcod:0,neventtyp:0,new_account_account_nam:0,new_account_domain_nam:0,new_account_security_id:0,new_logon_account_domain:0,new_logon_account_nam:0,new_logon_logon_guid:0,new_logon_logon_id:0,new_logon_security_id:[0,3],newli:[8,9],next:[0,3,5,6,8,9],nfilter:0,nice:1,nigeria:8,nkeyword:0,nll:6,nlognam:0,nmessag:0,nn:[8,9],nnetwork:0,noisi:7,none:[0,1,4,6],nopcod:0,normal:1,notabl:1,note:10,notebook:[3,4,5,6,7,8,9],now:[0,7,8,11],nrecordnumb:0,ns5:0,ns6:0,ns7:0,ns:[1,9],nsone:0,nsourcenam:0,ntaskcategori:0,ntype:0,number:[1,3,5,6,8,9,10,11],nvidia:[0,1,10],nxd:1,o:[0,2,10],obj:1,object:1,observ:1,obtain:8,occur:9,octob:8,offer:0,often:[0,7],onam:1,onc:[9,11],one:[1,6,11],onli:[1,3,5,6,8,9,10,11],onlin:[1,6],open:2,oper:[0,4,9,11],opt:[0,1,4,5,8,9],optim:1,option:[1,10,11],orc:11,order:[1,11],ordinari:9,org:[0,1],origin:1,os:0,osi:[0,2],osint:5,other:[0,4,6,8,9],oti:1,ouput:1,our:[0,3,5,7,8,9,11],out:1,out_sz:1,outlier:6,output:[0,1,10,11],output_delimit:11,output_df:0,output_dir:10,output_format:[0,1,11],output_path:[0,1,11],output_s:1,output_top:10,over:[3,5,8,9],overflow:4,overridden:1,own:5,owner:1,p09:0,p:[1,7,8,10],p_valu:1,packag:[0,1,4,5,8,9],page:[0,1,2],panda:[0,1],paper:[8,9],parallel:[1,8,9],param:1,paramet:[0,1,5,10,11],park:1,parquet:11,pars:[1,2,4,5,10],parse_log_fil:1,parse_raw_ev:1,parse_url:[0,1],parsed_df:4,parser:[0,2,4],part:11,particular:11,partit:[1,10],pascal:10,pass:[1,7],passiv:1,password:10,path:[0,1,10,11],patienc:8,pattern:[1,7,9],payment:8,pd:[1,2],pdd:7,pdm2:9,pdm:2,pem:10,peopl:8,per:4,percentag:1,perform:[0,1,3,6,8,10,11],period:[1,2],periodicity_detect:[1,7],periodogram:[1,7],permalink:1,permit:0,person:8,petroleum:8,petroluem:8,phish:2,phishing_detector2:8,phishing_detector:8,php:[1,4],pi:8,pid:[9,10],pin:9,pipelin:[1,10,11],platform:0,plug:11,pm:8,point:[1,6],poll:10,poll_interv:10,popul:1,port:[0,1,9,10],port_col:1,post:[1,4],powder:8,practic:6,prdg:1,pre:[1,2,8,9],pred:5,pred_result:3,predicit:9,predict:[1,2,3,5,8],prefer:10,prefix:1,prefixlen:1,preprocess:1,prerequisit:10,presenc:6,present:0,pretend:8,pretrain:4,previou:[1,7],previous:[4,9],print:[0,1,6,8,10],privat:1,privileg:[0,3],probabilist:9,probabl:[1,8,9],problem:[6,9],process:[1,9,10,11],process_information_caller_process_id:0,process_information_caller_process_nam:0,process_information_process_id:0,process_information_process_nam:0,process_process_id:0,process_process_nam:0,produc:[0,1,10],producer_conf:10,product:5,profil:9,profile_load:9,project:[1,6],promiscu:9,properti:[1,10,11],protect:0,provid:[0,1,5,11],proxi:1,ps:10,pth:[3,5,8,9],ptr:1,publish:[1,10],publisher_kafka_top:11,purpos:1,push:[1,10],put_com:1,py3:1,py:[0,1,4,5,8,9,10],pydata:[0,1],pyod:6,python3:[0,1,4,5,8,9],python:[0,6,10,11],pytorch_model:[4,10],queri:[0,1],query_rdata_ip:1,query_rdata_nam:1,query_rrset:[0,1],queu:1,queue:10,quickli:[0,11],quickstart:2,quota:1,r:[0,8],rajakumarvictrio:8,randn:[1,6],random:[1,3,6],randomli:3,rang:1,rapdi:6,rapid:[0,1,5,10],rate:1,rather:1,ratio:7,ravel:6,raw:[0,1,11],raw_column:1,raw_data_col_nam:1,raykallen:4,rdata_ip:1,rdata_nam:1,re:1,reach:11,read:[0,1,8,10,11],read_csv:11,reader:1,readi:[0,9,10],readlin:0,real:[0,1,7],receiv:[0,1,11],recent:1,recip:1,recognit:4,reconstruct:[1,2],record:1,recur:7,recurr:5,refer:[2,11],referral_url:0,regard:8,regex:1,regist:[0,1],registrar:[0,1],regress:1,regular:[1,9],reli:11,reliabl:8,remote_host:4,remov:[0,5],renam:9,render:1,replac:1,replic:1,report:1,repres:[1,5],represent:[1,8,9],reput:1,req_col:1,request:[1,8],request_http_v:4,request_method:4,request_url:4,requir:[1,4,7,10,11],required_col:[0,11],rescan:1,reserv:1,resolut:1,resourc:[1,5,8,10],respect:1,respons:1,response_bytes_clf:4,response_cod:1,response_list:1,result:[0,1,8,10],result_df:0,retail:7,retriev:1,retrun:1,review:[1,8],rfc:1,right:8,rnn_classifi:1,rnnclassifi:1,roll:[0,1],ron:8,ronsinclear:8,root:9,rotat:5,row:[0,1],rrset:1,rrtype:1,rtype:1,ru:1,run:[0,1,2,9,11],run_workflow:[0,1,11],runtim:10,rzscore:[0,1],s3:[4,5],s3_base_path:4,s3f:4,s3filesystem:4,s:[0,1,3,5,7,8,9,10,11],safenam:[0,1],sampl:[1,2,3,7,9],san:0,santa:0,satisfi:1,save:[1,2],save_analysi:1,save_checkpoint:[1,5],save_model:[1,3,8,9],save_to_path:1,sbcglobal:0,scalabl:6,scalar:[8,9],scale:1,scan:1,scan_big_fil:1,scan_id:1,scan_report:1,scanid:1,schema:[0,11],scientist:[0,4],score:[0,1,6],screenshot:1,script:[9,10],search:[2,8,9,11],second:[1,10],secur:[0,4],see:[8,11],seen:[1,11],seer:1,select:[1,3,10],self:[0,11],send:[1,10],sensit:8,sep:1,separ:1,seq_classifi:[8,9],seq_length:1,seq_relationship:[8,9],sequenc:[0,1,9],seri:[0,1,4,7,8],serv:1,server:[0,1,4,5,10],serverdeleteprohibit:0,servertransferprohibit:0,serverupdateprohibit:0,servic:[1,10],service_information_service_id:0,service_information_service_nam:0,service_serv:0,service_service_nam:0,session:10,set:[0,1,3,5,6,8,9,10,11],set_destin:1,set_sourc:1,sever:6,sh:[1,10],sha1:1,sha256:1,sha:1,share:10,should:[1,8,9],show:[0,3,4,6,8,9],shown:[6,10,11],sidlet:8,sigint:10,signal:[1,2,10],silent:1,similarli:10,simpl:0,simpli:[0,5,8,9],simplifi:0,sinc:[1,5],sinclear:8,singl:1,sink:10,sir:8,site:[0,1,4,5,8,9],size:[1,5,10],slash:1,slashnext:1,slashnext_cloud_apikei:1,slashnextcli:1,small:[0,3,5,8,9],snap:9,snx_ir_workspac:1,snx_ir_workspace_dir:1,so:9,solomon:8,solut:8,some:[0,3,8,9],sometim:11,sound:8,sourc:[2,10,11],sourcecod:11,sourcenam:3,spam:8,specif:[0,1,6,7,10,11],specifi:[1,10],speed:[5,10,11],spend:9,split:[1,3,8,9],splunk:[1,11],splunk_alert_workflow:1,splunk_notable_pars:1,splunkalertworkflow:1,splunknotablepars:1,stand:[8,9],standard:[1,7],start:[0,2],stat:[0,1],state:[0,8,9],statist:0,statistc:0,statlog:6,statu:[0,4,9],status_cod:1,step:[1,2,7,11],still:0,stop_workflow:1,str:[0,1,11],strang:8,stream:[8,9,10],streamz:2,strictlyconfidenti:8,string:[0,1,5],studi:6,subclass:1,subdomain:[0,1],subject_account_domain:0,subject_account_nam:0,subject_logon_guid:0,subject_logon_id:0,subject_security_id:0,submiss:1,submit:1,subnet:1,subscrib:8,subscript:8,subword_token:4,success:[0,1],successfulli:1,suffix:[0,1],sum:8,summari:1,summarystatist:1,superior:6,supervis:[1,2],suppli:7,support:1,suppos:6,surpris:8,sync:1,synthet:1,system:[0,1],t0:0,t100:0,t138:0,t17:0,t44:0,t4:0,t:[0,1,10],tabular:1,tabular_model:1,tabularmodel:1,take:1,taken:9,tapplic:0,target_account_account_domain:0,target_account_account_nam:0,target_account_new_account_nam:0,target_account_old_account_nam:0,target_account_security_id:0,target_server_additional_inform:0,target_server_target_server_nam:0,task:[4,8,9],taskcategori:3,tdestin:0,tdirect:0,teach:11,technolog:8,tender:8,tensor:[8,9],test:[0,1,3,8,9],test_df:5,text:1,tfilter:0,than:1,thei:[9,11],them:[1,5,11],thi:[0,1,3,4,5,6,7,8,9,10,11],threat:[1,2],three:8,threshold:1,through:[5,11],throughput:10,thursdai:8,thx:8,tie:0,time:[0,1,2,4,11],time_window:[1,11],timeout:[1,10],timespan:1,timestamp:1,timout:10,tinbound:0,tlayer:0,tld0:1,tld1:1,tld2:1,tld:[1,2],tmall:5,to_csv:0,to_periodgram:7,to_periodogram:[1,7],to_time_domain:[1,7],togeth:2,toi:4,token:4,toma:0,tonit:8,tonyr:8,toolbox:6,toolkit:10,top:5,topic1:11,topic2:11,topic3:11,topic:[1,10,11],torch:[8,9],total:[0,1,5],toward:0,tprocess:0,tprotocol:0,tradit:[0,5],train:[1,2],train_data:1,train_df:5,train_gdf:[1,3],train_model:[1,3,5,8,9],train_siz:[1,3,8,9],train_test_split:[3,8,9],transact:8,transfer:8,transform:[7,8,9],translat:0,treceiv:0,trigger:1,true_perc:1,true_result:3,truncat:[1,4],tsourc:0,tsystem:0,tuesdai:8,tune:[4,8,9],twitter:5,txt:5,ty:2,type:[1,2,3,5,9,11],u1:1,u2:1,u3:1,u4:1,u5:1,ubuntu:10,uci:6,uk:[0,5],uncas:[8,9],unconfin:9,understand:7,undetected_downloaded_sampl:1,undetected_url:1,uniqu:1,unit:5,unix:1,unnecessari:5,unseen:9,unsign:0,unspecifi:1,unsqueez:[8,9],up:[1,5],updat:9,updated_d:[0,1],upon:11,uri:1,url:[0,1,10],url_df_col:1,url_report:1,url_scan:[0,1],url_scan_sync:1,url_seri:1,us:[1,2,3,4,6,9,10],usag:1,use_bn:1,user234:0,user:[0,1,4,5,6,8,9,10],user_account_domain:0,user_account_nam:0,user_security_id:0,usernam:10,userwarn:[4,8,9],usual:1,util:[2,6],v18:10,v19:10,v2:[8,10],v:10,valid:[3,10],valu:[1,6,7,10],values_host:1,variabl:2,variou:[1,3,7,8],vast:9,ve:0,vector:[8,9],verbose_msg:1,veri:8,verifi:1,verify_connect:1,version:[0,1,5],veth3dd105f:9,veth7677340:9,via:[1,8],victrio:8,view:[4,5,6,7,10],viru:0,virus_tot:[0,1],virustot:[0,1],virustotalcli:[0,1],visit:[0,10],vocabulari:1,volum:10,vt_api_kei:0,vt_client:0,vt_endpoint_dict:1,w32:1,wa:[8,9],wadmpfvzi5ei:0,wai:[1,9,11],wait:[1,11],waiterr:0,want:[1,3,5,6,8,9,10],warn:[0,4,5,8,9],warning_msg:4,wd:[1,3],we:[0,3,4,5,6,7,8,9,10,11],web:1,weight:[8,9],wejaecjhycwss:5,well:[8,9],wep:0,were:[8,9],what:2,when:[2,4,8,9,10],whether:[1,5,10],whi:8,which:[0,1,5,8,9,10,11],who:8,whoi:[0,1],whois_client:0,whois_result:0,whois_serv:[0,1],whoislookupcli:[0,1],wide:6,window:[0,1,3,11],windows_event_pars:[0,1],windowseventpars:[0,1],winevt:0,wish:8,within:[0,1,6,10,11],work:[0,3,10],workflow:[2,5],workflow_script:10,world:0,worldbank:0,worlflow:11,would:[1,11],wrapper:1,write:[1,10,11],write_data:1,writer:1,written:[1,11],www:[0,1],x:[1,6,11],x_cat:1,x_cont:1,x_test:[1,3,8,9],x_train:[1,3,8,9],xskphhmrlcihr:5,xtorhktvpblmr:5,xvljisbfalkt:5,y:1,y_test:[3,8,9],y_train:[3,8,9],yahoo:[5,8],yaml:[0,10,11],ye:8,yet:1,yield:1,ylqblbltqkynb:5,you:[1,3,5,6,8,9,10,11],your:[0,1,3,4,5,6,8,9,10,11],your_volume_binding_container_directory_path:10,your_volume_binding_host_directory_path:10,youtub:5,z:[0,1],zeek:1,zero:1,zip:5,zipcod:0,zone:1,zookeep:10,zscore:[0,1],zscores_df:[0,1]},titles:["10 minutes to CLX","API Reference","Welcome to clx\u2019s documentation!","CLX Asset Classification (Supervised)","CLX cyBERT","CLX DGA Detection","CLX LODA Anomaly Detection","CLX Periodicity Analysis","CLX Phishing Detection Using cyBERT","CLX Predictive Maintenance","Getting Started with CLX and Streamz","CLX Workflow"],titleterms:{"10":0,A:11,ac:3,an:11,analysi:[1,7],analyt:1,anomali:6,apach:[4,10],api:1,ar:0,argument:10,asset:3,benchmark:10,build:10,captur:10,check:0,checkpoint:[5,8,9],classif:3,clx:[0,2,3,4,5,6,7,8,9,10,11],compon:11,conclus:[4,5,6,8,9],configur:11,contain:10,content:2,convert:0,creat:[4,10],custom:[10,11],cyber:0,cybert:[4,8,10],dask:11,data:[0,1],detect:[5,6,7,8],detector:6,dga:[5,10],dn:1,docker:10,document:2,domain:[7,10],download:4,evalu:6,exampl:[10,11],explan:6,exploratori:1,extern:11,extract:0,extractor:1,featur:1,file:11,filesystem:11,get:10,heurist:1,how:[4,5,6,7,8,9],i:[1,11],imag:10,indic:2,inferenc:[3,4,5,8,9],initi:3,input:4,instanc:4,integ:0,integr:[0,1],intellig:0,introduct:[3,4,6,7,9],ip:1,ipv4:0,kafka:11,learn:0,let:4,librari:0,load:[4,5,8,9],loda:6,log:[0,4,10],machin:0,mainten:9,minut:0,model:[3,4,5,6,8,9],multicast:0,o:[1,11],open:[0,1],osi:1,pars:0,parser:1,pd:8,pdm:9,period:7,phish:8,pre:4,predict:9,quickstart:10,reconstruct:7,refer:[1,6],run:10,s:[2,4],sampl:[4,10],save:[3,5,8,9],signal:7,simpl:11,sourc:[0,1],start:10,step:10,streamz:10,supervis:3,tabl:2,threat:0,time:7,tld:0,togeth:11,train:[3,4,5,6,8,9],ty:11,type:0,us:[0,5,7,8,11],util:1,valu:0,variabl:3,welcom:2,what:[0,5,8,11],when:[0,5,11],workflow:[0,1,10,11]}})