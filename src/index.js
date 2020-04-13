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
export const MODEL_NAME_PARTYGROUP = 'Predefine';
export const MODEL_NAME_PARTYROLE = 'Predefine';
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

// collection names
export const COLLECTION_NAME_PREDEFINE = 'predefines';
export const COLLECTION_NAME_UNIT = 'predefines';
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
export const COLLECTION_NAME_PARTYGROUP = 'predefines';
export const COLLECTION_NAME_PARTYROLE = 'predefines';
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

// predefine namespaces
export const PREDEFINE_NAMESPACE_UNIT = 'Unit';
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
export const PREDEFINE_NAMESPACE_PARTYGROUP = 'PartyGroup';
export const PREDEFINE_NAMESPACE_PARTYROLE = 'PartyRole';
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
export const PREDEFINE_BUCKET_UNIT = 'units';
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
export const PREDEFINE_BUCKET_PARTYGROUP = 'partygroups';
export const PREDEFINE_BUCKET_PARTYROLE = 'partyroles';
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
export const PATH_NAME_UNIT = 'unit';
export const PATH_NAME_ADMINISTRATIVELEVEL = 'level';
export const PATH_NAME_FEATURETYPE = 'type';
export const PATH_NAME_EVENTINDICATOR = 'indicator';
export const PATH_NAME_EVENTTOPIC = 'topic';
export const PATH_NAME_EVENTLEVEL = 'level';
export const PATH_NAME_EVENTSEVERITY = 'severity';
export const PATH_NAME_EVENTCERTAINTY = 'certainty';
export const PATH_NAME_EVENTSTATUS = 'status';
export const PATH_NAME_EVENTURGENCY = 'urgency';
export const PATH_NAME_EVENTRESPONSE = 'response';
export const PATH_NAME_PARTYGROUP = 'group';
export const PATH_NAME_PARTYGROUPS = 'groups';
export const PATH_NAME_PARTYROLE = 'role';
export const PATH_NAME_PARTYROLES = 'roles';
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

// default names
export const DEFAULT_UNIT_NAME = undefined;
export const DEFAULT_ADMINISTRATIVELEVEL_NAME = undefined;
export const DEFAULT_FEATURETYPE_NAME = undefined;
export const DEFAULT_EVENTINDICATOR_NAME = undefined;
export const DEFAULT_EVENTTOPIC_NAME = undefined;
export const DEFAULT_EVENTLEVEL_NAME = 'White';
export const DEFAULT_EVENTSEVERITY_NAME = 'Unknown';
export const DEFAULT_EVENTCERTAINTY_NAME = 'Unknown';
export const DEFAULT_EVENTSTATUS_NAME = 'Actual';
export const DEFAULT_EVENTURGENCY_NAME = 'Unknown';
export const DEFAULT_EVENTRESPONSE_NAME = 'None';
export const DEFAULT_PARTYGROUP_NAME = 'Unknown';
export const DEFAULT_PARTYROLE_NAME = 'Unknown';
export const DEFAULT_EVENTGROUP_NAME = undefined;
export const DEFAULT_EVENTTYPE_NAME = undefined;
export const DEFAULT_EVENTFUNCTION_NAME = undefined;
export const DEFAULT_EVENTACTION_NAME = undefined;
export const DEFAULT_EVENTQUESTION_NAME = undefined;
export const DEFAULT_ADMINISTRATIVEAREA_NAME = undefined;
export const DEFAULT_FEATURE_NAME = undefined;
export const DEFAULT_EVENTACTIONCATALOGUE_NAME = undefined;
export const DEFAULT_NOTIFICATIONTEMPLATE_NAME = undefined;
export const DEFAULT_NAMES = {
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
export const PREDEFINE_RELATIONS = {
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
export const PARTY_RELATIONS = {
  party: { ref: 'Party' },
  agency: { ref: 'Party', path: 'party' },
  group: { ref: 'Predefine', namespace: 'PartyGroup' },
  area: { ref: 'Predefine', namespace: 'AdministrativeArea' },
  role: { ref: 'Predefine', namespace: 'PartyRole' },
};

// event relations
export const EVENT_RELATIONS = {
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
export const EVENT_CHANGELOG_RELATIONS = {
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
