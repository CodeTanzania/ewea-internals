import { join, stringify } from '@lykmapipo/common';

// population options
export const POPULATION_MAX_DEPTH = 1;

export const POPULATION_DEFAULT = { maxDepth: POPULATION_MAX_DEPTH };

export const OPTION_PARTY_AUTOPOPULATE = {
  select: { name: 1, email: 1, mobile: 1, abbreviation: 1 },
  maxDepth: POPULATION_MAX_DEPTH,
};

export const OPTION_PERMISSION_AUTOPOPULATE = {
  select: { resource: 1, action: 1, wildcard: 1 },
  maxDepth: POPULATION_MAX_DEPTH,
};

// model names
export const MODEL_NAME_PREDEFINE = 'Predefine';
export const MODEL_NAME_UNIT = 'Predefine';
export const MODEL_NAME_PRIORITY = 'Predefine';
export const MODEL_NAME_ADMINISTRATIVELEVEL = 'Predefine';
export const MODEL_NAME_FEATURETYPE = 'Predefine';
export const MODEL_NAME_EVENTINDICATOR = 'Predefine';
export const MODEL_NAME_EVENTTOPIC = 'Predefine';
export const MODEL_NAME_EVENTLEVEL = 'Predefine';
export const MODEL_NAME_EVENTSEVERITY = 'Predefine';
export const MODEL_NAME_EVENTCERTAINTY = 'Predefine';
export const MODEL_NAME_EVENTSTATUS = 'Predefine';
export const MODEL_NAME_EVENTURGENCY = 'Predefine';
export const MODEL_NAME_EVENTRESPONSE = 'Predefine';
export const MODEL_NAME_CASESEVERITY = 'Predefine';
export const MODEL_NAME_CASESTAGE = 'Predefine';
export const MODEL_NAME_PARTYOWNERSHIP = 'Predefine';
export const MODEL_NAME_PARTYGROUP = 'Predefine';
export const MODEL_NAME_PARTYROLE = 'Predefine';
export const MODEL_NAME_PARTYGENDER = 'Predefine';
export const MODEL_NAME_PARTYOCCUPATION = 'Predefine';
export const MODEL_NAME_PARTYNATIONALITY = 'Predefine';
export const MODEL_NAME_VEHICLETYPE = 'Predefine';
export const MODEL_NAME_VEHICLEMODEL = 'Predefine';
export const MODEL_NAME_VEHICLEMAKE = 'Predefine';
export const MODEL_NAME_VEHICLESTATUS = 'Predefine';
export const MODEL_NAME_VEHICLE = 'Predefine';
export const MODEL_NAME_EVENTGROUP = 'Predefine';
export const MODEL_NAME_EVENTTYPE = 'Predefine';
export const MODEL_NAME_EVENTFUNCTION = 'Predefine';
export const MODEL_NAME_EVENTACTION = 'Predefine';
export const MODEL_NAME_EVENTQUESTION = 'Predefine';
export const MODEL_NAME_PERMISSION = 'Permission';
export const MODEL_NAME_ROLE = 'Predefine';
export const MODEL_NAME_ADMINISTRATIVEAREA = 'Predefine';
export const MODEL_NAME_PARTY = 'Party';
export const MODEL_NAME_FEATURE = 'Predefine';
export const MODEL_NAME_EVENTACTIONCATALOGUE = 'Predefine';
export const MODEL_NAME_NOTIFICATIONTEMPLATE = 'Predefine';
export const MODEL_NAME_EVENT = 'Event';
export const MODEL_NAME_EVENTCHANGELOG = 'EventChangeLog';
export const MODEL_NAME_VEHICLEDISPATCH = 'VehicleDispatch';
export const MODEL_NAME_CASE = 'Case';

// collection names
export const COLLECTION_NAME_PREDEFINE = 'predefines';
export const COLLECTION_NAME_UNIT = 'predefines';
export const COLLECTION_NAME_PRIORITY = 'predefines';
export const COLLECTION_NAME_ADMINISTRATIVELEVEL = 'predefines';
export const COLLECTION_NAME_FEATURETYPE = 'predefines';
export const COLLECTION_NAME_EVENTINDICATOR = 'predefines';
export const COLLECTION_NAME_EVENTTOPIC = 'predefines';
export const COLLECTION_NAME_EVENTLEVEL = 'predefines';
export const COLLECTION_NAME_EVENTSEVERITY = 'predefines';
export const COLLECTION_NAME_EVENTCERTAINTY = 'predefines';
export const COLLECTION_NAME_EVENTSTATUS = 'predefines';
export const COLLECTION_NAME_EVENTURGENCY = 'predefines';
export const COLLECTION_NAME_EVENTRESPONSE = 'predefines';
export const COLLECTION_NAME_CASESEVERITY = 'predefines';
export const COLLECTION_NAME_CASESTAGE = 'predefines';
export const COLLECTION_NAME_PARTYOWNERSHIP = 'predefines';
export const COLLECTION_NAME_PARTYGROUP = 'predefines';
export const COLLECTION_NAME_PARTYROLE = 'predefines';
export const COLLECTION_NAME_PARTYGENDER = 'predefines';
export const COLLECTION_NAME_PARTYOCCUPATION = 'predefines';
export const COLLECTION_NAME_PARTYNATIONALITY = 'predefines';
export const COLLECTION_NAME_VEHICLETYPE = 'predefines';
export const COLLECTION_NAME_VEHICLEMODEL = 'predefines';
export const COLLECTION_NAME_VEHICLEMAKE = 'predefines';
export const COLLECTION_NAME_VEHICLESTATUS = 'predefines';
export const COLLECTION_NAME_VEHICLE = 'predefines';
export const COLLECTION_NAME_EVENTGROUP = 'predefines';
export const COLLECTION_NAME_EVENTTYPE = 'predefines';
export const COLLECTION_NAME_EVENTFUNCTION = 'predefines';
export const COLLECTION_NAME_EVENTACTION = 'predefines';
export const COLLECTION_NAME_EVENTQUESTION = 'predefines';
export const COLLECTION_NAME_PERMISSION = 'permissions';
export const COLLECTION_NAME_ROLE = 'predefines';
export const COLLECTION_NAME_ADMINISTRATIVEAREA = 'predefines';
export const COLLECTION_NAME_PARTY = 'parties';
export const COLLECTION_NAME_FEATURE = 'predefines';
export const COLLECTION_NAME_EVENTACTIONCATALOGUE = 'predefines';
export const COLLECTION_NAME_NOTIFICATIONTEMPLATE = 'predefines';
export const COLLECTION_NAME_EVENT = 'events';
export const COLLECTION_NAME_EVENTCHANGELOG = 'eventchangelogs';
export const COLLECTION_NAME_VEHICLEDISPATCH = 'vehicledispatches';
export const COLLECTION_NAME_CASE = 'cases';

// predefine namespaces
export const PREDEFINE_NAMESPACE_UNIT = 'Unit';
export const PREDEFINE_NAMESPACE_PRIORITY = 'Priority';
export const PREDEFINE_NAMESPACE_ADMINISTRATIVELEVEL = 'AdministrativeLevel';
export const PREDEFINE_NAMESPACE_FEATURETYPE = 'FeatureType';
export const PREDEFINE_NAMESPACE_EVENTINDICATOR = 'EventIndicator';
export const PREDEFINE_NAMESPACE_EVENTTOPIC = 'EventTopic';
export const PREDEFINE_NAMESPACE_EVENTLEVEL = 'EventLevel';
export const PREDEFINE_NAMESPACE_EVENTSEVERITY = 'EventSeverity';
export const PREDEFINE_NAMESPACE_EVENTCERTAINTY = 'EventCertainty';
export const PREDEFINE_NAMESPACE_EVENTSTATUS = 'EventStatus';
export const PREDEFINE_NAMESPACE_EVENTURGENCY = 'EventUrgency';
export const PREDEFINE_NAMESPACE_EVENTRESPONSE = 'EventResponse';
export const PREDEFINE_NAMESPACE_CASESEVERITY = 'CaseSeverity';
export const PREDEFINE_NAMESPACE_CASESTAGE = 'CaseStage';
export const PREDEFINE_NAMESPACE_PARTYOWNERSHIP = 'PartyOwnership';
export const PREDEFINE_NAMESPACE_PARTYGROUP = 'PartyGroup';
export const PREDEFINE_NAMESPACE_PARTYROLE = 'PartyRole';
export const PREDEFINE_NAMESPACE_PARTYGENDER = 'PartyGender';
export const PREDEFINE_NAMESPACE_PARTYOCCUPATION = 'PartyOccupation';
export const PREDEFINE_NAMESPACE_PARTYNATIONALITY = 'PartyNationality';
export const PREDEFINE_NAMESPACE_VEHICLETYPE = 'VehicleType';
export const PREDEFINE_NAMESPACE_VEHICLEMODEL = 'VehicleModel';
export const PREDEFINE_NAMESPACE_VEHICLEMAKE = 'VehicleMake';
export const PREDEFINE_NAMESPACE_VEHICLESTATUS = 'VehicleStatus';
export const PREDEFINE_NAMESPACE_VEHICLE = 'Vehicle';
export const PREDEFINE_NAMESPACE_EVENTGROUP = 'EventGroup';
export const PREDEFINE_NAMESPACE_EVENTTYPE = 'EventType';
export const PREDEFINE_NAMESPACE_EVENTFUNCTION = 'EventFunction';
export const PREDEFINE_NAMESPACE_EVENTACTION = 'EventAction';
export const PREDEFINE_NAMESPACE_EVENTQUESTION = 'EventQuestion';
export const PREDEFINE_NAMESPACE_ROLE = 'Role';
export const PREDEFINE_NAMESPACE_ADMINISTRATIVEAREA = 'AdministrativeArea';
export const PREDEFINE_NAMESPACE_FEATURE = 'Feature';
export const PREDEFINE_NAMESPACE_EVENTACTIONCATALOGUE = 'EventActionCatalogue';
export const PREDEFINE_NAMESPACE_NOTIFICATIONTEMPLATE = 'NotificationTemplate';
export const PREDEFINE_NAMESPACES = [
  PREDEFINE_NAMESPACE_UNIT,
  PREDEFINE_NAMESPACE_PRIORITY,
  PREDEFINE_NAMESPACE_ADMINISTRATIVELEVEL,
  PREDEFINE_NAMESPACE_FEATURETYPE,
  PREDEFINE_NAMESPACE_EVENTINDICATOR,
  PREDEFINE_NAMESPACE_EVENTTOPIC,
  PREDEFINE_NAMESPACE_EVENTLEVEL,
  PREDEFINE_NAMESPACE_EVENTSEVERITY,
  PREDEFINE_NAMESPACE_EVENTCERTAINTY,
  PREDEFINE_NAMESPACE_EVENTSTATUS,
  PREDEFINE_NAMESPACE_EVENTURGENCY,
  PREDEFINE_NAMESPACE_EVENTRESPONSE,
  PREDEFINE_NAMESPACE_CASESEVERITY,
  PREDEFINE_NAMESPACE_CASESTAGE,
  PREDEFINE_NAMESPACE_PARTYOWNERSHIP,
  PREDEFINE_NAMESPACE_PARTYGROUP,
  PREDEFINE_NAMESPACE_PARTYROLE,
  PREDEFINE_NAMESPACE_PARTYGENDER,
  PREDEFINE_NAMESPACE_PARTYOCCUPATION,
  PREDEFINE_NAMESPACE_PARTYNATIONALITY,
  PREDEFINE_NAMESPACE_VEHICLETYPE,
  PREDEFINE_NAMESPACE_VEHICLEMODEL,
  PREDEFINE_NAMESPACE_VEHICLEMAKE,
  PREDEFINE_NAMESPACE_VEHICLESTATUS,
  PREDEFINE_NAMESPACE_VEHICLE,
  PREDEFINE_NAMESPACE_EVENTGROUP,
  PREDEFINE_NAMESPACE_EVENTTYPE,
  PREDEFINE_NAMESPACE_EVENTFUNCTION,
  PREDEFINE_NAMESPACE_EVENTACTION,
  PREDEFINE_NAMESPACE_EVENTQUESTION,
  PREDEFINE_NAMESPACE_ROLE,
  PREDEFINE_NAMESPACE_ADMINISTRATIVEAREA,
  PREDEFINE_NAMESPACE_FEATURE,
  PREDEFINE_NAMESPACE_EVENTACTIONCATALOGUE,
  PREDEFINE_NAMESPACE_NOTIFICATIONTEMPLATE,
];

// predefine buckets
export const PREDEFINE_BUCKET_UNIT = 'units';
export const PREDEFINE_BUCKET_PRIORITY = 'priorities';
export const PREDEFINE_BUCKET_ADMINISTRATIVELEVEL = 'administrativelevels';
export const PREDEFINE_BUCKET_FEATURETYPE = 'featuretypes';
export const PREDEFINE_BUCKET_EVENTINDICATOR = 'eventindicators';
export const PREDEFINE_BUCKET_EVENTTOPIC = 'eventtopics';
export const PREDEFINE_BUCKET_EVENTLEVEL = 'eventlevels';
export const PREDEFINE_BUCKET_EVENTSEVERITY = 'eventseverities';
export const PREDEFINE_BUCKET_EVENTCERTAINTY = 'eventcertainties';
export const PREDEFINE_BUCKET_EVENTSTATUS = 'eventstatuses';
export const PREDEFINE_BUCKET_EVENTURGENCY = 'eventurgencies';
export const PREDEFINE_BUCKET_EVENTRESPONSE = 'eventresponses';
export const PREDEFINE_BUCKET_CASESEVERITY = 'caseseverities';
export const PREDEFINE_BUCKET_CASESTAGE = 'casestages';
export const PREDEFINE_BUCKET_PARTYOWNERSHIP = 'partyownerships';
export const PREDEFINE_BUCKET_PARTYGROUP = 'partygroups';
export const PREDEFINE_BUCKET_PARTYROLE = 'partyroles';
export const PREDEFINE_BUCKET_PARTYGENDER = 'partygenders';
export const PREDEFINE_BUCKET_PARTYOCCUPATION = 'partyoccupations';
export const PREDEFINE_BUCKET_PARTYNATIONALITY = 'partynationalities';
export const PREDEFINE_BUCKET_VEHICLETYPE = 'vehicletypes';
export const PREDEFINE_BUCKET_VEHICLEMODEL = 'vehiclemodels';
export const PREDEFINE_BUCKET_VEHICLEMAKE = 'vehiclemakes';
export const PREDEFINE_BUCKET_VEHICLESTATUS = 'vehiclestatuses';
export const PREDEFINE_BUCKET_VEHICLE = 'vehicles';
export const PREDEFINE_BUCKET_EVENTGROUP = 'eventgroups';
export const PREDEFINE_BUCKET_EVENTTYPE = 'eventtypes';
export const PREDEFINE_BUCKET_EVENTFUNCTION = 'eventfunctions';
export const PREDEFINE_BUCKET_EVENTACTION = 'eventactions';
export const PREDEFINE_BUCKET_EVENTQUESTION = 'eventquestions';
export const PREDEFINE_BUCKET_ROLE = 'role';
export const PREDEFINE_BUCKET_ADMINISTRATIVEAREA = 'administrativeareas';
export const PREDEFINE_BUCKET_FEATURE = 'features';
export const PREDEFINE_BUCKET_EVENTACTIONCATALOGUE = 'eventcatalogues';
export const PREDEFINE_BUCKET_NOTIFICATIONTEMPLATE = 'notificationtemplates';
export const PREDEFINE_BUCKETS = [
  PREDEFINE_BUCKET_UNIT,
  PREDEFINE_BUCKET_PRIORITY,
  PREDEFINE_BUCKET_ADMINISTRATIVELEVEL,
  PREDEFINE_BUCKET_FEATURETYPE,
  PREDEFINE_BUCKET_EVENTINDICATOR,
  PREDEFINE_BUCKET_EVENTTOPIC,
  PREDEFINE_BUCKET_EVENTLEVEL,
  PREDEFINE_BUCKET_EVENTSEVERITY,
  PREDEFINE_BUCKET_EVENTCERTAINTY,
  PREDEFINE_BUCKET_EVENTSTATUS,
  PREDEFINE_BUCKET_EVENTURGENCY,
  PREDEFINE_BUCKET_EVENTRESPONSE,
  PREDEFINE_BUCKET_CASESEVERITY,
  PREDEFINE_BUCKET_CASESTAGE,
  PREDEFINE_BUCKET_PARTYOWNERSHIP,
  PREDEFINE_BUCKET_PARTYGROUP,
  PREDEFINE_BUCKET_PARTYROLE,
  PREDEFINE_BUCKET_PARTYGENDER,
  PREDEFINE_BUCKET_PARTYOCCUPATION,
  PREDEFINE_BUCKET_PARTYNATIONALITY,
  PREDEFINE_BUCKET_VEHICLETYPE,
  PREDEFINE_BUCKET_VEHICLEMODEL,
  PREDEFINE_BUCKET_VEHICLEMAKE,
  PREDEFINE_BUCKET_VEHICLESTATUS,
  PREDEFINE_BUCKET_VEHICLE,
  PREDEFINE_BUCKET_EVENTGROUP,
  PREDEFINE_BUCKET_EVENTTYPE,
  PREDEFINE_BUCKET_EVENTFUNCTION,
  PREDEFINE_BUCKET_EVENTACTION,
  PREDEFINE_BUCKET_EVENTQUESTION,
  PREDEFINE_BUCKET_ROLE,
  PREDEFINE_BUCKET_ADMINISTRATIVEAREA,
  PREDEFINE_BUCKET_FEATURE,
  PREDEFINE_BUCKET_EVENTACTIONCATALOGUE,
  PREDEFINE_BUCKET_NOTIFICATIONTEMPLATE,
];

// path names
export const PATH_NAME_UNIT = 'unit';
export const PATH_NAME_PRIORITY = 'priority';
export const PATH_NAME_ADMINISTRATIVELEVEL = 'level';
export const PATH_NAME_FEATURETYPE = 'type';
export const PATH_NAME_EVENTINDICATOR = 'indicator';
export const PATH_NAME_EVENTTOPIC = 'topic';
export const PATH_NAME_EVENTLEVEL = 'level';
export const PATH_NAME_EVENTSEVERITY = 'severity';
export const PATH_NAME_EVENTCERTAINTY = 'certainty';
export const PATH_NAME_EVENTSTATUS = 'status';
export const PATH_NAME_EVENTURGENCY = 'urgency';
export const PATH_NAME_CASESEVERITY = 'severity';
export const PATH_NAME_CASESTAGE = 'stage';
export const PATH_NAME_EVENTRESPONSE = 'response';
export const PATH_NAME_PARTYGROUP = 'group';
export const PATH_NAME_PARTYGROUPS = 'groups';
export const PATH_NAME_PARTYOWNERSHIP = 'ownership';
export const PATH_NAME_PARTYROLE = 'role';
export const PATH_NAME_PARTYROLES = 'roles';
export const PATH_NAME_PARTYGENDER = 'gender';
export const PATH_NAME_PARTYOCCUPATION = 'occupation';
export const PATH_NAME_PARTYNATIONALITY = 'nationality';
export const PATH_NAME_VEHICLETYPE = 'type';
export const PATH_NAME_VEHICLEMODEL = 'model';
export const PATH_NAME_VEHICLEMAKE = 'make';
export const PATH_NAME_VEHICLESTATUS = 'status';
export const PATH_NAME_VEHICLE = 'vehicle';
export const PATH_NAME_EVENTGROUP = 'group';
export const PATH_NAME_EVENTGROUPS = 'groups';
export const PATH_NAME_EVENTTYPE = 'type';
export const PATH_NAME_EVENTFUNCTION = 'function';
export const PATH_NAME_EVENTACTION = 'action';
export const PATH_NAME_EVENTQUESTION = 'question';
export const PATH_NAME_EVENTQUESTION_NEED = 'need';
export const PATH_NAME_EVENTQUESTION_EFFECT = 'effect';
export const PATH_NAME_PERMISSIONS = 'permissions';
export const PATH_NAME_ROLE = 'role';
export const PATH_NAME_ROLES = 'roles';
export const PATH_NAME_ADMINISTRATIVEAREA = 'area';
export const PATH_NAME_ADMINISTRATIVEAREAS = 'areas';
export const PATH_NAME_PARTY = 'party';
export const PATH_NAME_PARTY_FOCAL = 'focal';
export const PATH_NAME_PARTY_FOCALS = 'focals';
export const PATH_NAME_PARTY_AGENCY = 'agency';
export const PATH_NAME_PARTY_AGENCIES = 'agencies';
export const PATH_NAME_PARTY_CUSTODIAN = 'custodian';
export const PATH_NAME_PARTY_CUSTODIANS = 'custodians';
export const PATH_NAME_FEATURE = 'feature';
export const PATH_NAME_NOTIFICATIONTEMPLATE = 'template';
export const PATH_NAME_EVENT = 'event';
export const PATH_NAME_EVENTCHANGELOG = 'changelog';
export const PATH_NAME_EVENTCHANGELOGS = 'changelogs';

// predefine defaults(name, number etc)
export const PREDEFINE_UNIT_NAME = 'Unknown';
export const PREDEFINE_PRIORITY_NAME = 'Unknown';
export const PREDEFINE_ADMINISTRATIVELEVEL_NAME = 'Unknown';
export const PREDEFINE_FEATURETYPE_NAME = 'Unknown';
export const PREDEFINE_EVENTINDICATOR_NAME = 'Unknown';
export const PREDEFINE_EVENTTOPIC_NAME = 'Unknown';
export const PREDEFINE_EVENTLEVEL_NAME = 'White';
export const PREDEFINE_EVENTSEVERITY_NAME = 'Unknown';
export const PREDEFINE_EVENTCERTAINTY_NAME = 'Unknown';
export const PREDEFINE_EVENTSTATUS_NAME = 'Actual';
export const PREDEFINE_EVENTURGENCY_NAME = 'Unknown';
export const PREDEFINE_EVENTRESPONSE_NAME = 'None';
export const PREDEFINE_CASESEVERITY_NAME = 'Unknown';
export const PREDEFINE_CASESTAGE_NAME = 'Unknown';
export const PREDEFINE_PARTYOWNERSHIP_NAME = 'Unknown';
export const PREDEFINE_PARTYGROUP_NAME = 'Unknown';
export const PREDEFINE_PARTYROLE_NAME = 'Unknown';
export const PREDEFINE_PARTYGENDER_NAME = 'Unknown';
export const PREDEFINE_PARTYOCCUPATION_NAME = 'Unknown';
export const PREDEFINE_PARTYNATIONALITY_NAME = 'Unknown';
export const PREDEFINE_VEHICLETYPE_NAME = 'Unknown';
export const PREDEFINE_VEHICLEMODEL_NAME = 'Unknown';
export const PREDEFINE_VEHICLEMAKE_NAME = 'Unknown';
export const PREDEFINE_VEHICLESTATUS_NAME = 'Unknown';
export const PREDEFINE_VEHICLE_NAME = 'Unknown';
export const PREDEFINE_EVENTGROUP_NAME = 'Unknown';
export const PREDEFINE_EVENTTYPE_NAME = 'Unknown';
export const PREDEFINE_EVENTFUNCTION_NAME = 'Unknown';
export const PREDEFINE_EVENTACTION_NAME = 'Unknown';
export const PREDEFINE_EVENTQUESTION_NAME = 'Unknown';
export const PREDEFINE_ADMINISTRATIVEAREA_NAME = 'Unknown';
export const PREDEFINE_FEATURE_NAME = 'Unknown';
export const PREDEFINE_EVENTACTIONCATALOGUE_NAME = 'Unknown';
export const PREDEFINE_NOTIFICATIONTEMPLATE_NAME = 'Unknown';
export const PREDEFINE_DEFAULTS = {
  [PREDEFINE_NAMESPACE_UNIT]: PREDEFINE_UNIT_NAME,
  [PREDEFINE_NAMESPACE_PRIORITY]: PREDEFINE_PRIORITY_NAME,
  [PREDEFINE_NAMESPACE_ADMINISTRATIVELEVEL]: PREDEFINE_ADMINISTRATIVELEVEL_NAME,
  [PREDEFINE_NAMESPACE_FEATURETYPE]: PREDEFINE_FEATURETYPE_NAME,
  [PREDEFINE_NAMESPACE_EVENTINDICATOR]: PREDEFINE_EVENTINDICATOR_NAME,
  [PREDEFINE_NAMESPACE_EVENTTOPIC]: PREDEFINE_EVENTTOPIC_NAME,
  [PREDEFINE_NAMESPACE_EVENTLEVEL]: PREDEFINE_EVENTLEVEL_NAME,
  [PREDEFINE_NAMESPACE_EVENTSEVERITY]: PREDEFINE_EVENTSEVERITY_NAME,
  [PREDEFINE_NAMESPACE_EVENTCERTAINTY]: PREDEFINE_EVENTCERTAINTY_NAME,
  [PREDEFINE_NAMESPACE_EVENTSTATUS]: PREDEFINE_EVENTSTATUS_NAME,
  [PREDEFINE_NAMESPACE_EVENTURGENCY]: PREDEFINE_EVENTURGENCY_NAME,
  [PREDEFINE_NAMESPACE_EVENTRESPONSE]: PREDEFINE_EVENTRESPONSE_NAME,
  [PREDEFINE_NAMESPACE_CASESEVERITY]: PREDEFINE_CASESEVERITY_NAME,
  [PREDEFINE_NAMESPACE_CASESTAGE]: PREDEFINE_CASESTAGE_NAME,
  [PREDEFINE_NAMESPACE_PARTYOWNERSHIP]: PREDEFINE_PARTYOWNERSHIP_NAME,
  [PREDEFINE_NAMESPACE_PARTYGROUP]: PREDEFINE_PARTYGROUP_NAME,
  [PREDEFINE_NAMESPACE_PARTYROLE]: PREDEFINE_PARTYROLE_NAME,
  [PREDEFINE_NAMESPACE_PARTYGENDER]: PREDEFINE_PARTYGENDER_NAME,
  [PREDEFINE_NAMESPACE_PARTYNATIONALITY]: PREDEFINE_PARTYNATIONALITY_NAME,
  [PREDEFINE_NAMESPACE_PARTYOCCUPATION]: PREDEFINE_PARTYOCCUPATION_NAME,
  [PREDEFINE_NAMESPACE_VEHICLETYPE]: PREDEFINE_VEHICLETYPE_NAME,
  [PREDEFINE_NAMESPACE_VEHICLEMODEL]: PREDEFINE_VEHICLEMODEL_NAME,
  [PREDEFINE_NAMESPACE_VEHICLEMAKE]: PREDEFINE_VEHICLEMAKE_NAME,
  [PREDEFINE_NAMESPACE_VEHICLESTATUS]: PREDEFINE_VEHICLESTATUS_NAME,
  [PREDEFINE_NAMESPACE_VEHICLE]: PREDEFINE_VEHICLE_NAME,
  [PREDEFINE_NAMESPACE_EVENTGROUP]: PREDEFINE_EVENTGROUP_NAME,
  [PREDEFINE_NAMESPACE_EVENTTYPE]: PREDEFINE_EVENTTYPE_NAME,
  [PREDEFINE_NAMESPACE_EVENTFUNCTION]: PREDEFINE_EVENTFUNCTION_NAME,
  [PREDEFINE_NAMESPACE_EVENTACTION]: PREDEFINE_EVENTACTION_NAME,
  [PREDEFINE_NAMESPACE_EVENTQUESTION]: PREDEFINE_EVENTQUESTION_NAME,
  [PREDEFINE_NAMESPACE_ADMINISTRATIVEAREA]: PREDEFINE_ADMINISTRATIVEAREA_NAME,
  [PREDEFINE_NAMESPACE_FEATURE]: PREDEFINE_FEATURE_NAME,
  [PREDEFINE_NAMESPACE_EVENTACTIONCATALOGUE]: PREDEFINE_EVENTACTIONCATALOGUE_NAME,
  [PREDEFINE_NAMESPACE_NOTIFICATIONTEMPLATE]: PREDEFINE_NOTIFICATIONTEMPLATE_NAME,
};

// predefine relations
export const PREDEFINE_RELATIONS = {
  parent: { ref: MODEL_NAME_PREDEFINE, namespace: PREDEFINE_NAMESPACES },
  permissions: {
    ref: MODEL_NAME_PERMISSION,
    array: true,
    autopopulate: OPTION_PERMISSION_AUTOPOPULATE,
  },
  roles: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_PARTYROLE,
    array: true,
  },
  groups: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_PARTYGROUP,
    array: true,
  },
  group: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTGROUP,
  },
  type: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: [
      PREDEFINE_NAMESPACE_EVENTTYPE,
      PREDEFINE_NAMESPACE_VEHICLETYPE,
      PREDEFINE_NAMESPACE_FEATURETYPE,
    ],
  },
  function: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTFUNCTION,
  },
  action: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTACTION,
  },
  level: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: [
      PREDEFINE_NAMESPACE_ADMINISTRATIVELEVEL,
      PREDEFINE_NAMESPACE_EVENTLEVEL,
    ],
  },
  area: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_ADMINISTRATIVEAREA,
  },
  indicator: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTINDICATOR,
  },
  topic: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTTOPIC,
  },
  unit: { ref: MODEL_NAME_PREDEFINE, namespace: PREDEFINE_NAMESPACE_UNIT },
  model: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_VEHICLEMODEL,
  },
  make: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_VEHICLEMAKE,
  },
  status: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: [
      PREDEFINE_NAMESPACE_EVENTSTATUS,
      PREDEFINE_NAMESPACE_VEHICLESTATUS,
    ],
  },
  priority: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_PRIORITY,
  },
  ownership: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_PARTYOWNERSHIP,
  },
  owner: {
    ref: MODEL_NAME_PARTY,
    autopopulate: OPTION_PARTY_AUTOPOPULATE,
  },
  agencies: {
    ref: MODEL_NAME_PARTY,
    array: true,
    autopopulate: OPTION_PARTY_AUTOPOPULATE,
  },
  focals: {
    ref: MODEL_NAME_PARTY,
    array: true,
    autopopulate: OPTION_PARTY_AUTOPOPULATE,
  },
  custodians: {
    ref: MODEL_NAME_PARTY,
    array: true,
    autopopulate: OPTION_PARTY_AUTOPOPULATE,
  },
};

// party relations
export const PARTY_RELATIONS = {
  party: { ref: MODEL_NAME_PARTY },
  agency: { ref: MODEL_NAME_PARTY, path: 'party' },
  group: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_PARTYGROUP,
  },
  level: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_ADMINISTRATIVELEVEL,
  },
  area: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_ADMINISTRATIVEAREA,
  },
  ownership: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_PARTYOWNERSHIP,
  },
  role: { ref: MODEL_NAME_PREDEFINE, namespace: PREDEFINE_NAMESPACE_PARTYROLE },
  gender: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_PARTYGENDER,
  },
  nationality: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_PARTYNATIONALITY,
  },
  facility: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_FEATURE,
  },
};

// event relations
export const EVENT_RELATIONS = {
  group: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTGROUP,
  },
  type: { ref: MODEL_NAME_PREDEFINE, namespace: PREDEFINE_NAMESPACE_EVENTTYPE },
  level: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTLEVEL,
  },
  severity: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTSEVERITY,
  },
  certainty: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTCERTAINTY,
  },
  status: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTSTATUS,
  },
  urgency: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTURGENCY,
  },
  response: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTRESPONSE,
  },
  areas: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_ADMINISTRATIVEAREA,
    array: true,
  },
  agencies: { ref: MODEL_NAME_PARTY, array: true },
  focals: { ref: MODEL_NAME_PARTY, array: true },
};

// event changelog relations
export const EVENT_CHANGELOG_RELATIONS = {
  initiator: { ref: MODEL_NAME_PARTY },
  verifier: { ref: MODEL_NAME_PARTY },
  group: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTGROUP,
  },
  type: { ref: MODEL_NAME_PREDEFINE, namespace: PREDEFINE_NAMESPACE_EVENTTYPE },
  level: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTLEVEL,
  },
  severity: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTSEVERITY,
  },
  certainty: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTCERTAINTY,
  },
  status: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTSTATUS,
  },
  urgency: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTURGENCY,
  },
  response: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTRESPONSE,
  },
  event: { ref: MODEL_NAME_EVENT },
  function: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTFUNCTION,
  },
  action: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTACTION,
  },
  catalogue: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTACTIONCATALOGUE,
  },
  indicator: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTINDICATOR,
  },
  topic: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTTOPIC,
  },
  question: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTQUESTION,
  },
  need: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTQUESTION,
  },
  effect: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTQUESTION,
  },
  unit: { ref: MODEL_NAME_PREDEFINE, namespace: PREDEFINE_NAMESPACE_UNIT },
  areas: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_ADMINISTRATIVEAREA,
    array: true,
  },
  groups: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_PARTYGROUP,
    array: true,
  },
  roles: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_PARTYROLE,
    array: true,
  },
  agencies: { ref: MODEL_NAME_PARTY, array: true },
  focals: { ref: MODEL_NAME_PARTY, array: true },
  template: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_NOTIFICATIONTEMPLATE,
  },
};

// vehicle dispatch relations
export const VEHICLE_DISPATCH_RELATIONS = {
  group: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_EVENTGROUP,
  },
  type: { ref: MODEL_NAME_PREDEFINE, namespace: PREDEFINE_NAMESPACE_EVENTTYPE },
  event: { ref: MODEL_NAME_EVENT },
  'requester.facility': {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_FEATURE,
  },
  'requester.area': {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_ADMINISTRATIVEAREA,
  },
  'victim.gender': {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_PARTYGENDER,
  },
  'victim.area': {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_ADMINISTRATIVEAREA,
  },
  'pickup.facility': {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_FEATURE,
  },
  'pickup.area': {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_ADMINISTRATIVEAREA,
  },
  'dropoff.facility': {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_FEATURE,
  },
  'dropoff.area': {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_ADMINISTRATIVEAREA,
  },
  'carrier.type': {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_VEHICLETYPE,
  },
  'carrier.owner': {
    ref: MODEL_NAME_PARTY,
  },
  'carrier.ownership': {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_PARTYOWNERSHIP,
  },
  'carrier.vehicle': {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_VEHICLE,
  },
  crew: { ref: MODEL_NAME_PARTY, array: true },
  status: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_VEHICLESTATUS,
  },
  priority: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_PRIORITY,
  },
  reporter: { ref: MODEL_NAME_PARTY },
  dispatcher: { ref: MODEL_NAME_PARTY },
  canceler: { ref: MODEL_NAME_PARTY },
  resolver: { ref: MODEL_NAME_PARTY },
};

// case relations
export const CASE_RELATIONS = {
  severity: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_CASESEVERITY,
  },
  stage: {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_CASESTAGE,
  },
  'victim.gender': {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_PARTYGENDER,
  },
  'victim.occupation': {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_PARTYOCCUPATION,
  },
  'victim.nationality': {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_PARTYNATIONALITY,
  },
  'victim.area': {
    ref: MODEL_NAME_PREDEFINE,
    namespace: PREDEFINE_NAMESPACE_ADMINISTRATIVEAREA,
  },
};

export const PERMISSION_SEED_RESOURCES = ['Agency', 'FocalPeople'];

export const PERMISSION_SEED_IGNORE = [
  'Audio',
  'Campaign',
  'Counter',
  'Document',
  'EventChangeLog',
  'Image',
  'File',
  'Message',
  'Party',
  'Permission',
  'Predefine',
  'Role',
  'Video',
];

// setup env
process.env.PERMISSION_SEED_RESOURCES = join(PERMISSION_SEED_RESOURCES, ',');
process.env.PERMISSION_SEED_IGNORE = join(PERMISSION_SEED_IGNORE, ',');
process.env.PREDEFINE_NAMESPACES = join(PREDEFINE_NAMESPACES, ',');
process.env.PREDEFINE_RELATIONS_IGNORED = join(PREDEFINE_NAMESPACES, ',');
process.env.PREDEFINE_RELATIONS = stringify(PREDEFINE_RELATIONS);
