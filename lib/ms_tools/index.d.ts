
declare namespace ms_tools {
  function get_url_from_catalog(sCatalogNameiID: string): unknown;
  function view_open_doc(sCatalogNameiIDTopElem: string): unknown;
  function view_delete_doc(_catalog_name: string): unknown;
  function raise_system_event(
    _code: string,
    _system_eventID: unknown,
    _objectDocID: unknown,
    _objectDoc: unknown
  ): unknown;
  function raise_system_event_env(oSystemEventIDoc: unknown): unknown;
  function notes_verify_password(_clear_password: unknown, _hash_password: unknown): unknown;
  function set_ui_lng(_ui_lng_id: unknown): unknown;
  function get_const(_ui_lng_id: unknown): unknown;
  function eval_column_const(_ui_lng_id: unknown): unknown;
  function eval_column_name(sCodeListElem: unknown): unknown;
  function obtain_ui_lngs(): unknown;
  function compare_versions(_version: unknown, _cur_version: unknown): unknown;
  function verify_disp_object_blocks(_doc_source: unknown): unknown;
  function delete_resource(oResource: unknown): unknown;
  function init_view(oSourceTarget: unknown): unknown;
  function get_log_email_errors(dtLastDate: unknown): unknown;
  function get_border_panel_object(oBorderPanel: unknown): unknown;
  function open_dlg_global_settings(sSelTab: unknown): unknown;
  function check_doc_screen_access(TopElem: unknown): unknown;
  function check_access_block_rights(sAccessBlocksRightoUser: unknown): unknown;
  function obtain_shared_list_elem(sListPathParam: string, sPrimaryKeyParam: string, oListElemParam: unknown): unknown;
  function delete_shared_list_elem(sListPathParam: string, sPrimaryKeyParam: string, oListElemParam: unknown): unknown;
  function save_cached_doc(doc: unknown): unknown;
  function trigger_onsavedoc(Doc: unknown): unknown;
  function check_std(teObject: unknown): unknown;
  function list_edit_open_select(oListo: unknown, oTarget: unknown): unknown;
  function get_columns_array_by_field(fldChild: unknown, arrColumns: unknown): unknown;
  function server_tenancy_on_init(TopElem: unknown, sTenancyName: unknown): unknown;
  function server_tenancy_on_app_init(TopElem: unknown): unknown;
  function server_tenancy_init(sTenancyName: unknown): unknown;
  function set_next_coding(teObjectTarget: unknown): unknown;
  function ask_options_activate_objects_to_persons(sTypearrValues: unknown): unknown;
  function ask_options_activate_qualifications_to_persons(bAssignment: unknown): unknown;
  function activate_objects_to_persons(
    sTaskIDsType: unknown,
    sObjectIDs: unknown,
    sPersonIDs: unknown,
    o: unknown
  ): unknown;
  function assign_qualifications_to_objects(sTaskIDsType: unknown, sObjectIDs: unknown): unknown;
  function activate_to_objects(sTaskIDsTypesObjectIDs: unknown, o: unknown): unknown;
  function check_task(sTaskIDoRetTarget: unknown, Request: unknown): unknown;
  function init_task(o: unknown, iDelay: unknown): unknown;
  function init_task_data(teTaskInfo: unknown, iDelay: unknown): unknown;
  function start_task(sTaskIDsMethodNameoMethod: unknown): unknown;
  function start_task_data(sTaskIDsMethodNameoMethod: unknown): unknown;
  function get_task(sTaskID: unknown): unknown;
  function get_task_data(sTaskID: unknown): unknown;
  function set_task(sTaskIDteTaskInfo: unknown): unknown;
  function set_task_data(sTaskIDteTaskInfo: unknown): unknown;
  function get_tasks(sTaskList: unknown): unknown;
  function get_tasks_data(sTaskList: unknown): unknown;
  function set_task_field(sTaskIDsFieldNamesFieldValue: unknown): unknown;
  function set_task_field_data(sTaskIDsFieldNamesFieldValue: unknown): unknown;
  function remove_task(sTaskID: unknown): unknown;
  function remove_task_data(sTaskID: unknown): unknown;
  function set_message_task(sTaskIDo: unknown): unknown;
  function return_message_task(sTaskIDo: unknown): unknown;
  function show_massage_task(oTaskInfo: unknown): unknown;
  function start_task_progress(sMethodNameoMethodo: unknown): unknown;
  function recover_task_progress(): unknown;
  function set_progress_info(sTaskIDo: unknown): unknown;
  function return_progress_info(sTaskIDo: unknown): unknown;
  function catalog_resave(sTaskIDsCatalogNamebDataFlag: unknown, bIDFlag: unknown): unknown;
  function check_access_blocks_by_catalog_name(sAccessBlockssCatalogNamesCan: unknown): unknown;
  function check_cur_user_access_blocks_by_catalog_name(sCatalogNamesCan: unknown): unknown;
  function check_cur_user_access_blocks(sAccessBlocsCan: unknown): unknown;
  function check_cur_user_access_applications_by_catalog_name(
    sCatalogNamecurUser: unknown,
    oContentAccess: unknown,
    sCanElem: unknown
  ): unknown;
  function get_admin_init_server_data(): unknown;
  function enable_logs_server(): unknown;
  function validate_blog_entry_comments(oObject: unknown): unknown;
  function prepare_client_update(): unknown;
  function prepare_client_update_core(): unknown;
  function exec_amgr_code(sScript: unknown): unknown;
  function navigate_view(sFramesUrl: unknown): unknown;
  function navigate_list(sUrlsType: unknown): unknown;
  function get_view_url(sCatalogNamesUrlQuery: unknown): unknown;
  function get_task_result_num(sResult: unknown): unknown;
  function get_callback_tasks(teRaram: unknown): unknown;
  function check_content_access(oContentAccesssCatalogNameiObjectIDsAccessType: unknown): unknown;
  function save_doc_screen(TopElem: unknown): unknown;
  function set_view_templates(TopElem: unknown): unknown;
  function get_field_path(fld: unknown): unknown;
  function create_package_objects(fldPackage: unknown): unknown;
  function disp_block(sBlockName: unknown): unknown;
  function create_resource_admin(sUrlteSourceScreen: unknown): unknown;
  function navigate_access_block(sIDsTypesScreenType: unknown): unknown;
  function get_access_block_items(fldAccessBlock: unknown): unknown;
  function set_cur_user_content_first_catalog_url(sTabBlockTypeiObjectID: unknown): unknown;
  function binary_load_from_url(fldTarget: unknown, sUrl: unknown): unknown;
  function run_view_action(TopElem: unknown, oScreensGridItemName: unknown): unknown;
  function convert_exec_code(fldExecTarget: unknown, fldUrlTarget: unknown, fldTextTarget: unknown): unknown;
  function foreign_elem_title(fldSource: unknown, sFieldNamesDefauldText: unknown): unknown;
  function calculate_statistic_rec_obj(iStatisticRecIDiObjectIDiPersonID: unknown): unknown;
  function evaluate_remote_collection_obj(
    oRemoteCollectioniObjectIDiPersonIDoCollection: unknown,
    iStartPos: unknown,
    iPageSize: unknown
  ): unknown;
  function eval_menu_remote_action(oList: unknown, ListElemAction: unknown, oScreen: unknown): unknown;
  function eval_remote_action(oRemoteActionIDofldTopElemoScreensDispType: unknown): unknown;
  function get_remote_actions_by_cur_application(sCatalogName: unknown): unknown;
  function get_element_property(oElem: unknown, sPropertyName: unknown, sAltPropertyName: unknown): unknown;
  function disp_application_view_configuration(
    teApplicationsViewConfigurationIDsElemType: unknown,
    oMenuElem: unknown,
    bNoTab: unknown,
    bOnlyUrl: unknown
  ): unknown;
  function disp_application_complex_block(sBlockIDbNoTab: unknown, bOnlyUrl: unknown): unknown;
  function update_access_blocks_doc_types(fldAccessBlocks: unknown): unknown;
}
