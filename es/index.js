import { join, stringify } from '@lykmapipo/common';

// population options
const POPULATION_MAX_DEPTH = 1;

const POPULATION_DEFAULT = { maxDepth: POPULATION_MAX_DEPTH };

const OPTION_PARTY_AUTOPOPULATE = {
  select: { name: 1, email: 1, mobile: 1, abbreviation: 1 },
  maxDepth: POPULATION_MAX_DEPTH,
};

const OPTION_PERMISSION_AUTOPOPULATE = {
  select: { resource: 1, action: 1, wildcard: 1 },
  maxDepth: POPULATION_MAX_DEPTH,
};

// model names
const MODEL_NAME_PREDEFINE = 'Predefine';
const MODEL_NAME_UNIT = 'Predefine';
const MODEL_NAME_ADMINISTRATIVELEVEL = 'Predefine';
const MODEL_NAME_FEATURETYPE = 'Predefine';
const MODEL_NAME_EVENTINDICATOR = 'Predefine';
const MODEL_NAME_EVENTTOPIC = 'Predefine';
const MODEL_NAME_EVENTLEVEL = 'Predefine';
const MODEL_NAME_EVENTSEVERITY = 'Predefine';
const MODEL_NAME_EVENTCERTAINTY = 'Predefine';
const MODEL_NAME_EVENTSTATUS = 'Predefine';
const MODEL_NAME_EVENTURGENCY = 'Predefine';
const MODEL_NAME_EVENTRESPONSE = 'Predefine';
const MODEL_NAME_PARTYGROUP = 'Predefine';
const MODEL_NAME_PARTYROLE = 'Predefine';
const MODEL_NAME_EVENTGROUP = 'Predefine';
const MODEL_NAME_EVENTTYPE = 'Predefine';
const MODEL_NAME_EVENTFUNCTION = 'Predefine';
const MODEL_NAME_EVENTACTION = 'Predefine';
const MODEL_NAME_EVENTQUESTION = 'Predefine';
const MODEL_NAME_PERMISSION = 'Permission';
const MODEL_NAME_ROLE = 'Predefine';
const MODEL_NAME_ADMINISTRATIVEAREA = 'Predefine';
const MODEL_NAME_PARTY = 'Party';
const MODEL_NAME_FEATURE = 'Predefine';
const MODEL_NAME_EVENTACTIONCATALOGUE = 'Predefine';
const MODEL_NAME_NOTIFICATIONTEMPLATE = 'Predefine';
const MODEL_NAME_EVENT = 'Event';
const MODEL_NAME_EVENTCHANGELOG = 'EventChangeLog';

// collection names
const COLLECTION_NAME_PREDEFINE = 'predefines';
const COLLECTION_NAME_UNIT = 'predefines';
const COLLECTION_NAME_ADMINISTRATIVELEVEL = 'predefines';
const COLLECTION_NAME_FEATURETYPE = 'predefines';
const COLLECTION_NAME_EVENTINDICATOR = 'predefines';
const COLLECTION_NAME_EVENTTOPIC = 'predefines';
const COLLECTION_NAME_EVENTLEVEL = 'predefines';
const COLLECTION_NAME_EVENTSEVERITY = 'predefines';
const COLLECTION_NAME_EVENTCERTAINTY = 'predefines';
const COLLECTION_NAME_EVENTSTATUS = 'predefines';
const COLLECTION_NAME_EVENTURGENCY = 'predefines';
const COLLECTION_NAME_EVENTRESPONSE = 'predefines';
const COLLECTION_NAME_PARTYGROUP = 'predefines';
const COLLECTION_NAME_PARTYROLE = 'predefines';
const COLLECTION_NAME_EVENTGROUP = 'predefines';
const COLLECTION_NAME_EVENTTYPE = 'predefines';
const COLLECTION_NAME_EVENTFUNCTION = 'predefines';
const COLLECTION_NAME_EVENTACTION = 'predefines';
const COLLECTION_NAME_EVENTQUESTION = 'predefines';
const COLLECTION_NAME_PERMISSION = 'permissions';
const COLLECTION_NAME_ROLE = 'predefines';
const COLLECTION_NAME_ADMINISTRATIVEAREA = 'predefines';
const COLLECTION_NAME_PARTY = 'parties';
const COLLECTION_NAME_FEATURE = 'predefines';
const COLLECTION_NAME_EVENTACTIONCATALOGUE = 'predefines';
const COLLECTION_NAME_NOTIFICATIONTEMPLATE = 'predefines';
const COLLECTION_NAME_EVENT = 'events';
const COLLECTION_NAME_EVENTCHANGELOG = 'eventchangelogs';

// predefine namespaces
const PREDEFINE_NAMESPACE_UNIT = 'Unit';
const PREDEFINE_NAMESPACE_ADMINISTRATIVELEVEL = 'AdministrativeLevel';
const PREDEFINE_NAMESPACE_FEATURETYPE = 'FeatureType';
const PREDEFINE_NAMESPACE_EVENTINDICATOR = 'EventIndicator';
const PREDEFINE_NAMESPACE_EVENTTOPIC = 'EventTopic';
const PREDEFINE_NAMESPACE_EVENTLEVEL = 'EventLevel';
const PREDEFINE_NAMESPACE_EVENTSEVERITY = 'EventSeverity';
const PREDEFINE_NAMESPACE_EVENTCERTAINTY = 'EventCertainty';
const PREDEFINE_NAMESPACE_EVENTSTATUS = 'EventStatus';
const PREDEFINE_NAMESPACE_EVENTURGENCY = 'EventUrgency';
const PREDEFINE_NAMESPACE_EVENTRESPONSE = 'EventResponse';
const PREDEFINE_NAMESPACE_PARTYGROUP = 'PartyGroup';
const PREDEFINE_NAMESPACE_PARTYROLE = 'PartyRole';
const PREDEFINE_NAMESPACE_EVENTGROUP = 'EventGroup';
const PREDEFINE_NAMESPACE_EVENTTYPE = 'EventType';
const PREDEFINE_NAMESPACE_EVENTFUNCTION = 'EventFunction';
const PREDEFINE_NAMESPACE_EVENTACTION = 'EventAction';
const PREDEFINE_NAMESPACE_EVENTQUESTION = 'EventQuestion';
const PREDEFINE_NAMESPACE_ROLE = 'Role';
const PREDEFINE_NAMESPACE_ADMINISTRATIVEAREA = 'AdministrativeArea';
const PREDEFINE_NAMESPACE_FEATURE = 'Feature';
const PREDEFINE_NAMESPACE_EVENTACTIONCATALOGUE = 'EventActionCatalogue';
const PREDEFINE_NAMESPACE_NOTIFICATIONTEMPLATE = 'NotificationTemplate';
const PREDEFINE_NAMESPACES = [
  PREDEFINE_NAMESPACE_UNIT,
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
  PREDEFINE_NAMESPACE_PARTYGROUP,
  PREDEFINE_NAMESPACE_PARTYROLE,
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
const PREDEFINE_BUCKET_UNIT = 'units';
const PREDEFINE_BUCKET_ADMINISTRATIVELEVEL = 'administrativelevels';
const PREDEFINE_BUCKET_FEATURETYPE = 'featuretypes';
const PREDEFINE_BUCKET_EVENTINDICATOR = 'eventindicators';
const PREDEFINE_BUCKET_EVENTTOPIC = 'eventtopics';
const PREDEFINE_BUCKET_EVENTLEVEL = 'eventlevels';
const PREDEFINE_BUCKET_EVENTSEVERITY = 'eventseverities';
const PREDEFINE_BUCKET_EVENTCERTAINTY = 'eventcertainties';
const PREDEFINE_BUCKET_EVENTSTATUS = 'eventstatuses';
const PREDEFINE_BUCKET_EVENTURGENCY = 'eventurgencies';
const PREDEFINE_BUCKET_EVENTRESPONSE = 'eventresponses';
const PREDEFINE_BUCKET_PARTYGROUP = 'partygroups';
const PREDEFINE_BUCKET_PARTYROLE = 'partyroles';
const PREDEFINE_BUCKET_EVENTGROUP = 'eventgroups';
const PREDEFINE_BUCKET_EVENTTYPE = 'eventtypes';
const PREDEFINE_BUCKET_EVENTFUNCTION = 'eventfunctions';
const PREDEFINE_BUCKET_EVENTACTION = 'eventactions';
const PREDEFINE_BUCKET_EVENTQUESTION = 'eventquestions';
const PREDEFINE_BUCKET_ROLE = 'role';
const PREDEFINE_BUCKET_ADMINISTRATIVEAREA = 'administrativeareas';
const PREDEFINE_BUCKET_FEATURE = 'features';
const PREDEFINE_BUCKET_EVENTACTIONCATALOGUE = 'eventcatalogues';
const PREDEFINE_BUCKET_NOTIFICATIONTEMPLATE = 'notificationtemplates';
const PREDEFINE_BUCKETS = [
  PREDEFINE_BUCKET_UNIT,
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
  PREDEFINE_BUCKET_PARTYGROUP,
  PREDEFINE_BUCKET_PARTYROLE,
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
const PATH_NAME_UNIT = 'unit';
const PATH_NAME_ADMINISTRATIVELEVEL = 'level';
const PATH_NAME_FEATURETYPE = 'type';
const PATH_NAME_EVENTINDICATOR = 'indicator';
const PATH_NAME_EVENTTOPIC = 'topic';
const PATH_NAME_EVENTLEVEL = 'level';
const PATH_NAME_EVENTSEVERITY = 'severity';
const PATH_NAME_EVENTCERTAINTY = 'certainty';
const PATH_NAME_EVENTSTATUS = 'status';
const PATH_NAME_EVENTURGENCY = 'urgency';
const PATH_NAME_EVENTRESPONSE = 'response';
const PATH_NAME_PARTYGROUP = 'group';
const PATH_NAME_PARTYGROUPS = 'groups';
const PATH_NAME_PARTYROLE = 'role';
const PATH_NAME_PARTYROLES = 'roles';
const PATH_NAME_EVENTGROUP = 'group';
const PATH_NAME_EVENTGROUPS = 'groups';
const PATH_NAME_EVENTTYPE = 'type';
const PATH_NAME_EVENTFUNCTION = 'function';
const PATH_NAME_EVENTACTION = 'action';
const PATH_NAME_EVENTQUESTION = 'question';
const PATH_NAME_EVENTQUESTION_NEED = 'need';
const PATH_NAME_EVENTQUESTION_EFFECT = 'effect';
const PATH_NAME_PERMISSIONS = 'permissions';
const PATH_NAME_ROLE = 'role';
const PATH_NAME_ROLES = 'roles';
const PATH_NAME_ADMINISTRATIVEAREA = 'area';
const PATH_NAME_ADMINISTRATIVEAREAS = 'areas';
const PATH_NAME_PARTY = 'party';
const PATH_NAME_PARTY_FOCAL = 'focal';
const PATH_NAME_PARTY_FOCALS = 'focals';
const PATH_NAME_PARTY_AGENCY = 'agency';
const PATH_NAME_PARTY_AGENCIES = 'agencies';
const PATH_NAME_PARTY_CUSTODIAN = 'custodian';
const PATH_NAME_PARTY_CUSTODIANS = 'custodians';
const PATH_NAME_FEATURE = 'feature';
const PATH_NAME_NOTIFICATIONTEMPLATE = 'template';
const PATH_NAME_EVENT = 'event';
const PATH_NAME_EVENTCHANGELOG = 'changelog';
const PATH_NAME_EVENTCHANGELOGS = 'changelogs';

// default names
const DEFAULT_UNIT_NAME = undefined;
const DEFAULT_ADMINISTRATIVELEVEL_NAME = undefined;
const DEFAULT_FEATURETYPE_NAME = undefined;
const DEFAULT_EVENTINDICATOR_NAME = undefined;
const DEFAULT_EVENTTOPIC_NAME = undefined;
const DEFAULT_EVENTLEVEL_NAME = 'White';
const DEFAULT_EVENTSEVERITY_NAME = 'Unknown';
const DEFAULT_EVENTCERTAINTY_NAME = 'Unknown';
const DEFAULT_EVENTSTATUS_NAME = 'Actual';
const DEFAULT_EVENTURGENCY_NAME = 'Unknown';
const DEFAULT_EVENTRESPONSE_NAME = 'None';
const DEFAULT_PARTYGROUP_NAME = 'Unknown';
const DEFAULT_PARTYROLE_NAME = 'Unknown';
const DEFAULT_EVENTGROUP_NAME = undefined;
const DEFAULT_EVENTTYPE_NAME = undefined;
const DEFAULT_EVENTFUNCTION_NAME = undefined;
const DEFAULT_EVENTACTION_NAME = undefined;
const DEFAULT_EVENTQUESTION_NAME = undefined;
const DEFAULT_ADMINISTRATIVEAREA_NAME = undefined;
const DEFAULT_FEATURE_NAME = undefined;
const DEFAULT_EVENTACTIONCATALOGUE_NAME = undefined;
const DEFAULT_NOTIFICATIONTEMPLATE_NAME = undefined;
const DEFAULT_NAMES = {
  [PREDEFINE_NAMESPACE_UNIT]: DEFAULT_UNIT_NAME,
  [PREDEFINE_NAMESPACE_ADMINISTRATIVELEVEL]: DEFAULT_ADMINISTRATIVELEVEL_NAME,
  [PREDEFINE_NAMESPACE_FEATURETYPE]: DEFAULT_FEATURETYPE_NAME,
  [PREDEFINE_NAMESPACE_EVENTINDICATOR]: DEFAULT_EVENTINDICATOR_NAME,
  [PREDEFINE_NAMESPACE_EVENTTOPIC]: DEFAULT_EVENTTOPIC_NAME,
  [PREDEFINE_NAMESPACE_EVENTLEVEL]: DEFAULT_EVENTLEVEL_NAME,
  [PREDEFINE_NAMESPACE_EVENTSEVERITY]: DEFAULT_EVENTSEVERITY_NAME,
  [PREDEFINE_NAMESPACE_EVENTCERTAINTY]: DEFAULT_EVENTCERTAINTY_NAME,
  [PREDEFINE_NAMESPACE_EVENTSTATUS]: DEFAULT_EVENTSTATUS_NAME,
  [PREDEFINE_NAMESPACE_EVENTURGENCY]: DEFAULT_EVENTURGENCY_NAME,
  [PREDEFINE_NAMESPACE_EVENTRESPONSE]: DEFAULT_EVENTRESPONSE_NAME,
  [PREDEFINE_NAMESPACE_PARTYGROUP]: DEFAULT_PARTYGROUP_NAME,
  [PREDEFINE_NAMESPACE_PARTYROLE]: DEFAULT_PARTYROLE_NAME,
  [PREDEFINE_NAMESPACE_EVENTGROUP]: DEFAULT_EVENTGROUP_NAME,
  [PREDEFINE_NAMESPACE_EVENTTYPE]: DEFAULT_EVENTTYPE_NAME,
  [PREDEFINE_NAMESPACE_EVENTFUNCTION]: DEFAULT_EVENTFUNCTION_NAME,
  [PREDEFINE_NAMESPACE_EVENTACTION]: DEFAULT_EVENTACTION_NAME,
  [PREDEFINE_NAMESPACE_EVENTQUESTION]: DEFAULT_EVENTQUESTION_NAME,
  [PREDEFINE_NAMESPACE_ADMINISTRATIVEAREA]: DEFAULT_ADMINISTRATIVEAREA_NAME,
  [PREDEFINE_NAMESPACE_FEATURETYPE]: DEFAULT_FEATURE_NAME,
  [PREDEFINE_NAMESPACE_EVENTACTIONCATALOGUE]: DEFAULT_EVENTACTIONCATALOGUE_NAME,
  [PREDEFINE_NAMESPACE_NOTIFICATIONTEMPLATE]: DEFAULT_NOTIFICATIONTEMPLATE_NAME,
};

// predefine relations
const PREDEFINE_RELATIONS = {
  permissions: {
    ref: 'Permission',
    array: true,
    autopopulate: OPTION_PERMISSION_AUTOPOPULATE,
  },
  roles: { ref: 'Predefine', namespace: 'PartyRole', array: true },
  groups: { ref: 'Predefine', namespace: 'PartyGroup', array: true },
  group: { ref: 'Predefine', namespace: 'EventGroup' },
  type: { ref: 'Predefine', namespace: ['EventType', 'FeatureType'] },
  function: { ref: 'Predefine', namespace: 'EventFunction' },
  action: { ref: 'Predefine', namespace: 'EventAction' },
  level: { ref: 'Predefine', namespace: ['AdministrativeLevel', 'EventLevel'] },
  area: { ref: 'Predefine', namespace: 'AdministrativeArea' },
  indicator: { ref: 'Predefine', namespace: 'EventIndicator' },
  topic: { ref: 'Predefine', namespace: 'EventTopic' },
  unit: { ref: 'Predefine', namespace: 'Unit' },
  agencies: {
    ref: 'Party',
    array: true,
    autopopulate: OPTION_PARTY_AUTOPOPULATE,
  },
  focals: {
    ref: 'Party',
    array: true,
    autopopulate: OPTION_PARTY_AUTOPOPULATE,
  },
  custodians: {
    ref: 'Party',
    array: true,
    autopopulate: OPTION_PARTY_AUTOPOPULATE,
  },
};

// party relations
const PARTY_RELATIONS = {
  party: { ref: 'Party' },
  agency: { ref: 'Party', path: 'party' },
  group: { ref: 'Predefine', namespace: 'PartyGroup' },
  area: { ref: 'Predefine', namespace: 'AdministrativeArea' },
  role: { ref: 'Predefine', namespace: 'PartyRole' },
};

// event relations
const EVENT_RELATIONS = {
  group: { ref: 'Predefine', namespace: 'EventGroup' },
  type: { ref: 'Predefine', namespace: 'EventType' },
  level: { ref: 'Predefine', namespace: 'EventLevel' },
  severity: { ref: 'Predefine', namespace: 'EventSeverity' },
  certainty: { ref: 'Predefine', namespace: 'EventCertainty' },
  status: { ref: 'Predefine', namespace: 'EventStatus' },
  urgency: { ref: 'Predefine', namespace: 'EventUrgency' },
  response: { ref: 'Predefine', namespace: 'EventResponse' },
  areas: { ref: 'Predefine', namespace: 'AdministrativeArea', array: true },
};

// event changelog relations
const EVENT_CHANGELOG_RELATIONS = {
  initiator: { ref: 'Party' },
  verifier: { ref: 'Party' },
  group: { ref: 'Predefine', namespace: 'EventGroup' },
  type: { ref: 'Predefine', namespace: 'EventType' },
  event: { ref: 'Event' },
  function: { ref: 'Predefine', namespace: 'EventFunction' },
  action: { ref: 'Predefine', namespace: 'EventAction' },
  catalogue: { ref: 'Predefine', namespace: 'EventActionCatalogue' },
  indicator: { ref: 'Predefine', namespace: 'EventIndicator' },
  topic: { ref: 'Predefine', namespace: 'EventTopic' },
  question: { ref: 'Predefine', namespace: 'EventQuestion' },
  need: { ref: 'Predefine', namespace: 'EventQuestion' },
  effect: { ref: 'Predefine', namespace: 'EventQuestion' },
  areas: { ref: 'Predefine', namespace: 'AdministrativeArea', array: true },
  groups: { ref: 'Predefine', namespace: 'PartyGroup', array: true },
  roles: { ref: 'Predefine', namespace: 'PartyRole', array: true },
  agencies: { ref: 'Party', array: true },
  focals: { ref: 'Party', array: true },
  template: { ref: 'Predefine', namespace: 'NotificationTemplate' },
};

// setup env
process.env.PREDEFINE_NAMESPACES = join(PREDEFINE_NAMESPACES, ',');
process.env.PREDEFINE_RELATIONS_IGNORED = join(PREDEFINE_NAMESPACES, ',');
process.env.PREDEFINE_RELATIONS = stringify(PREDEFINE_RELATIONS);

export { COLLECTION_NAME_ADMINISTRATIVEAREA, COLLECTION_NAME_ADMINISTRATIVELEVEL, COLLECTION_NAME_EVENT, COLLECTION_NAME_EVENTACTION, COLLECTION_NAME_EVENTACTIONCATALOGUE, COLLECTION_NAME_EVENTCERTAINTY, COLLECTION_NAME_EVENTCHANGELOG, COLLECTION_NAME_EVENTFUNCTION, COLLECTION_NAME_EVENTGROUP, COLLECTION_NAME_EVENTINDICATOR, COLLECTION_NAME_EVENTLEVEL, COLLECTION_NAME_EVENTQUESTION, COLLECTION_NAME_EVENTRESPONSE, COLLECTION_NAME_EVENTSEVERITY, COLLECTION_NAME_EVENTSTATUS, COLLECTION_NAME_EVENTTOPIC, COLLECTION_NAME_EVENTTYPE, COLLECTION_NAME_EVENTURGENCY, COLLECTION_NAME_FEATURE, COLLECTION_NAME_FEATURETYPE, COLLECTION_NAME_NOTIFICATIONTEMPLATE, COLLECTION_NAME_PARTY, COLLECTION_NAME_PARTYGROUP, COLLECTION_NAME_PARTYROLE, COLLECTION_NAME_PERMISSION, COLLECTION_NAME_PREDEFINE, COLLECTION_NAME_ROLE, COLLECTION_NAME_UNIT, DEFAULT_ADMINISTRATIVEAREA_NAME, DEFAULT_ADMINISTRATIVELEVEL_NAME, DEFAULT_EVENTACTIONCATALOGUE_NAME, DEFAULT_EVENTACTION_NAME, DEFAULT_EVENTCERTAINTY_NAME, DEFAULT_EVENTFUNCTION_NAME, DEFAULT_EVENTGROUP_NAME, DEFAULT_EVENTINDICATOR_NAME, DEFAULT_EVENTLEVEL_NAME, DEFAULT_EVENTQUESTION_NAME, DEFAULT_EVENTRESPONSE_NAME, DEFAULT_EVENTSEVERITY_NAME, DEFAULT_EVENTSTATUS_NAME, DEFAULT_EVENTTOPIC_NAME, DEFAULT_EVENTTYPE_NAME, DEFAULT_EVENTURGENCY_NAME, DEFAULT_FEATURETYPE_NAME, DEFAULT_FEATURE_NAME, DEFAULT_NAMES, DEFAULT_NOTIFICATIONTEMPLATE_NAME, DEFAULT_PARTYGROUP_NAME, DEFAULT_PARTYROLE_NAME, DEFAULT_UNIT_NAME, EVENT_CHANGELOG_RELATIONS, EVENT_RELATIONS, MODEL_NAME_ADMINISTRATIVEAREA, MODEL_NAME_ADMINISTRATIVELEVEL, MODEL_NAME_EVENT, MODEL_NAME_EVENTACTION, MODEL_NAME_EVENTACTIONCATALOGUE, MODEL_NAME_EVENTCERTAINTY, MODEL_NAME_EVENTCHANGELOG, MODEL_NAME_EVENTFUNCTION, MODEL_NAME_EVENTGROUP, MODEL_NAME_EVENTINDICATOR, MODEL_NAME_EVENTLEVEL, MODEL_NAME_EVENTQUESTION, MODEL_NAME_EVENTRESPONSE, MODEL_NAME_EVENTSEVERITY, MODEL_NAME_EVENTSTATUS, MODEL_NAME_EVENTTOPIC, MODEL_NAME_EVENTTYPE, MODEL_NAME_EVENTURGENCY, MODEL_NAME_FEATURE, MODEL_NAME_FEATURETYPE, MODEL_NAME_NOTIFICATIONTEMPLATE, MODEL_NAME_PARTY, MODEL_NAME_PARTYGROUP, MODEL_NAME_PARTYROLE, MODEL_NAME_PERMISSION, MODEL_NAME_PREDEFINE, MODEL_NAME_ROLE, MODEL_NAME_UNIT, OPTION_PARTY_AUTOPOPULATE, OPTION_PERMISSION_AUTOPOPULATE, PARTY_RELATIONS, PATH_NAME_ADMINISTRATIVEAREA, PATH_NAME_ADMINISTRATIVEAREAS, PATH_NAME_ADMINISTRATIVELEVEL, PATH_NAME_EVENT, PATH_NAME_EVENTACTION, PATH_NAME_EVENTCERTAINTY, PATH_NAME_EVENTCHANGELOG, PATH_NAME_EVENTCHANGELOGS, PATH_NAME_EVENTFUNCTION, PATH_NAME_EVENTGROUP, PATH_NAME_EVENTGROUPS, PATH_NAME_EVENTINDICATOR, PATH_NAME_EVENTLEVEL, PATH_NAME_EVENTQUESTION, PATH_NAME_EVENTQUESTION_EFFECT, PATH_NAME_EVENTQUESTION_NEED, PATH_NAME_EVENTRESPONSE, PATH_NAME_EVENTSEVERITY, PATH_NAME_EVENTSTATUS, PATH_NAME_EVENTTOPIC, PATH_NAME_EVENTTYPE, PATH_NAME_EVENTURGENCY, PATH_NAME_FEATURE, PATH_NAME_FEATURETYPE, PATH_NAME_NOTIFICATIONTEMPLATE, PATH_NAME_PARTY, PATH_NAME_PARTYGROUP, PATH_NAME_PARTYGROUPS, PATH_NAME_PARTYROLE, PATH_NAME_PARTYROLES, PATH_NAME_PARTY_AGENCIES, PATH_NAME_PARTY_AGENCY, PATH_NAME_PARTY_CUSTODIAN, PATH_NAME_PARTY_CUSTODIANS, PATH_NAME_PARTY_FOCAL, PATH_NAME_PARTY_FOCALS, PATH_NAME_PERMISSIONS, PATH_NAME_ROLE, PATH_NAME_ROLES, PATH_NAME_UNIT, POPULATION_DEFAULT, POPULATION_MAX_DEPTH, PREDEFINE_BUCKETS, PREDEFINE_BUCKET_ADMINISTRATIVEAREA, PREDEFINE_BUCKET_ADMINISTRATIVELEVEL, PREDEFINE_BUCKET_EVENTACTION, PREDEFINE_BUCKET_EVENTACTIONCATALOGUE, PREDEFINE_BUCKET_EVENTCERTAINTY, PREDEFINE_BUCKET_EVENTFUNCTION, PREDEFINE_BUCKET_EVENTGROUP, PREDEFINE_BUCKET_EVENTINDICATOR, PREDEFINE_BUCKET_EVENTLEVEL, PREDEFINE_BUCKET_EVENTQUESTION, PREDEFINE_BUCKET_EVENTRESPONSE, PREDEFINE_BUCKET_EVENTSEVERITY, PREDEFINE_BUCKET_EVENTSTATUS, PREDEFINE_BUCKET_EVENTTOPIC, PREDEFINE_BUCKET_EVENTTYPE, PREDEFINE_BUCKET_EVENTURGENCY, PREDEFINE_BUCKET_FEATURE, PREDEFINE_BUCKET_FEATURETYPE, PREDEFINE_BUCKET_NOTIFICATIONTEMPLATE, PREDEFINE_BUCKET_PARTYGROUP, PREDEFINE_BUCKET_PARTYROLE, PREDEFINE_BUCKET_ROLE, PREDEFINE_BUCKET_UNIT, PREDEFINE_NAMESPACES, PREDEFINE_NAMESPACE_ADMINISTRATIVEAREA, PREDEFINE_NAMESPACE_ADMINISTRATIVELEVEL, PREDEFINE_NAMESPACE_EVENTACTION, PREDEFINE_NAMESPACE_EVENTACTIONCATALOGUE, PREDEFINE_NAMESPACE_EVENTCERTAINTY, PREDEFINE_NAMESPACE_EVENTFUNCTION, PREDEFINE_NAMESPACE_EVENTGROUP, PREDEFINE_NAMESPACE_EVENTINDICATOR, PREDEFINE_NAMESPACE_EVENTLEVEL, PREDEFINE_NAMESPACE_EVENTQUESTION, PREDEFINE_NAMESPACE_EVENTRESPONSE, PREDEFINE_NAMESPACE_EVENTSEVERITY, PREDEFINE_NAMESPACE_EVENTSTATUS, PREDEFINE_NAMESPACE_EVENTTOPIC, PREDEFINE_NAMESPACE_EVENTTYPE, PREDEFINE_NAMESPACE_EVENTURGENCY, PREDEFINE_NAMESPACE_FEATURE, PREDEFINE_NAMESPACE_FEATURETYPE, PREDEFINE_NAMESPACE_NOTIFICATIONTEMPLATE, PREDEFINE_NAMESPACE_PARTYGROUP, PREDEFINE_NAMESPACE_PARTYROLE, PREDEFINE_NAMESPACE_ROLE, PREDEFINE_NAMESPACE_UNIT, PREDEFINE_RELATIONS };
