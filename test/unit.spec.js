import { expect } from '@lykmapipo/test-helpers';
import { getStrings, getObject } from '@lykmapipo/env';
import {
  // models
  MODEL_NAME_PREDEFINE,
  MODEL_NAME_UNIT,
  MODEL_NAME_PRIORITY,
  MODEL_NAME_ADMINISTRATIVELEVEL,
  MODEL_NAME_FEATURETYPE,
  MODEL_NAME_EVENTINDICATOR,
  MODEL_NAME_EVENTTOPIC,
  MODEL_NAME_EVENTLEVEL,
  MODEL_NAME_EVENTSEVERITY,
  MODEL_NAME_EVENTCERTAINTY,
  MODEL_NAME_EVENTSTATUS,
  MODEL_NAME_EVENTURGENCY,
  MODEL_NAME_EVENTRESPONSE,
  MODEL_NAME_PARTYOWNERSHIP,
  MODEL_NAME_PARTYGROUP,
  MODEL_NAME_PARTYROLE,
  MODEL_NAME_PARTYGENDER,
  MODEL_NAME_VEHICLETYPE,
  MODEL_NAME_VEHICLEMODEL,
  MODEL_NAME_VEHICLEMAKE,
  MODEL_NAME_VEHICLESTATUS,
  MODEL_NAME_VEHICLE,
  MODEL_NAME_EVENTGROUP,
  MODEL_NAME_EVENTTYPE,
  MODEL_NAME_EVENTFUNCTION,
  MODEL_NAME_EVENTACTION,
  MODEL_NAME_EVENTQUESTION,
  MODEL_NAME_PERMISSION,
  MODEL_NAME_ROLE,
  MODEL_NAME_ADMINISTRATIVEAREA,
  MODEL_NAME_PARTY,
  MODEL_NAME_FEATURE,
  MODEL_NAME_EVENTACTIONCATALOGUE,
  MODEL_NAME_NOTIFICATIONTEMPLATE,
  MODEL_NAME_EVENT,
  MODEL_NAME_EVENTCHANGELOG,
  MODEL_NAME_VEHICLEDISPATCH,
  // collections
  COLLECTION_NAME_PREDEFINE,
  COLLECTION_NAME_UNIT,
  COLLECTION_NAME_PRIORITY,
  COLLECTION_NAME_ADMINISTRATIVELEVEL,
  COLLECTION_NAME_FEATURETYPE,
  COLLECTION_NAME_EVENTINDICATOR,
  COLLECTION_NAME_EVENTTOPIC,
  COLLECTION_NAME_EVENTLEVEL,
  COLLECTION_NAME_EVENTSEVERITY,
  COLLECTION_NAME_EVENTCERTAINTY,
  COLLECTION_NAME_EVENTSTATUS,
  COLLECTION_NAME_EVENTURGENCY,
  COLLECTION_NAME_EVENTRESPONSE,
  COLLECTION_NAME_PARTYOWNERSHIP,
  COLLECTION_NAME_PARTYGROUP,
  COLLECTION_NAME_PARTYROLE,
  COLLECTION_NAME_PARTYGENDER,
  COLLECTION_NAME_VEHICLETYPE,
  COLLECTION_NAME_VEHICLEMODEL,
  COLLECTION_NAME_VEHICLEMAKE,
  COLLECTION_NAME_VEHICLESTATUS,
  COLLECTION_NAME_VEHICLE,
  COLLECTION_NAME_EVENTGROUP,
  COLLECTION_NAME_EVENTTYPE,
  COLLECTION_NAME_EVENTFUNCTION,
  COLLECTION_NAME_EVENTACTION,
  COLLECTION_NAME_EVENTQUESTION,
  COLLECTION_NAME_PERMISSION,
  COLLECTION_NAME_ROLE,
  COLLECTION_NAME_ADMINISTRATIVEAREA,
  COLLECTION_NAME_PARTY,
  COLLECTION_NAME_FEATURE,
  COLLECTION_NAME_EVENTACTIONCATALOGUE,
  COLLECTION_NAME_NOTIFICATIONTEMPLATE,
  COLLECTION_NAME_EVENT,
  COLLECTION_NAME_EVENTCHANGELOG,
  COLLECTION_NAME_VEHICLEDISPATCH,
  // namespaces
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
  PREDEFINE_NAMESPACE_PARTYOWNERSHIP,
  PREDEFINE_NAMESPACE_PARTYGROUP,
  PREDEFINE_NAMESPACE_PARTYROLE,
  PREDEFINE_NAMESPACE_PARTYGENDER,
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
  PREDEFINE_NAMESPACES,
  // buckets
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
  PREDEFINE_BUCKET_PARTYOWNERSHIP,
  PREDEFINE_BUCKET_PARTYGROUP,
  PREDEFINE_BUCKET_PARTYROLE,
  PREDEFINE_BUCKET_PARTYGENDER,
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
  PREDEFINE_BUCKETS,
  // paths
  PATH_NAME_UNIT,
  PATH_NAME_PRIORITY,
  PATH_NAME_ADMINISTRATIVELEVEL,
  PATH_NAME_FEATURETYPE,
  PATH_NAME_EVENTINDICATOR,
  PATH_NAME_EVENTTOPIC,
  PATH_NAME_EVENTLEVEL,
  PATH_NAME_EVENTSEVERITY,
  PATH_NAME_EVENTCERTAINTY,
  PATH_NAME_EVENTSTATUS,
  PATH_NAME_EVENTURGENCY,
  PATH_NAME_EVENTRESPONSE,
  PATH_NAME_PARTYOWNERSHIP,
  PATH_NAME_PARTYGROUP,
  PATH_NAME_PARTYGROUPS,
  PATH_NAME_PARTYROLE,
  PATH_NAME_PARTYGENDER,
  PATH_NAME_VEHICLETYPE,
  PATH_NAME_VEHICLEMODEL,
  PATH_NAME_VEHICLEMAKE,
  PATH_NAME_VEHICLESTATUS,
  PATH_NAME_VEHICLE,
  PATH_NAME_PARTYROLES,
  PATH_NAME_EVENTGROUP,
  PATH_NAME_EVENTGROUPS,
  PATH_NAME_EVENTTYPE,
  PATH_NAME_EVENTFUNCTION,
  PATH_NAME_EVENTACTION,
  PATH_NAME_EVENTQUESTION,
  PATH_NAME_EVENTQUESTION_NEED,
  PATH_NAME_EVENTQUESTION_EFFECT,
  PATH_NAME_PERMISSIONS,
  PATH_NAME_ROLE,
  PATH_NAME_ROLES,
  PATH_NAME_ADMINISTRATIVEAREA,
  PATH_NAME_ADMINISTRATIVEAREAS,
  PATH_NAME_PARTY,
  PATH_NAME_PARTY_FOCAL,
  PATH_NAME_PARTY_FOCALS,
  PATH_NAME_PARTY_AGENCY,
  PATH_NAME_PARTY_AGENCIES,
  PATH_NAME_PARTY_CUSTODIAN,
  PATH_NAME_PARTY_CUSTODIANS,
  PATH_NAME_FEATURE,
  PATH_NAME_NOTIFICATIONTEMPLATE,
  PATH_NAME_EVENT,
  PATH_NAME_EVENTCHANGELOG,
  PATH_NAME_EVENTCHANGELOGS,
  PREDEFINE_RELATIONS,
  // default names
  PREDEFINE_UNIT_NAME,
  PREDEFINE_PRIORITY_NAME,
  PREDEFINE_ADMINISTRATIVELEVEL_NAME,
  PREDEFINE_FEATURETYPE_NAME,
  PREDEFINE_EVENTINDICATOR_NAME,
  PREDEFINE_EVENTTOPIC_NAME,
  PREDEFINE_EVENTLEVEL_NAME,
  PREDEFINE_EVENTSEVERITY_NAME,
  PREDEFINE_EVENTCERTAINTY_NAME,
  PREDEFINE_EVENTSTATUS_NAME,
  PREDEFINE_EVENTURGENCY_NAME,
  PREDEFINE_EVENTRESPONSE_NAME,
  PREDEFINE_PARTYOWNERSHIP_NAME,
  PREDEFINE_PARTYGROUP_NAME,
  PREDEFINE_PARTYROLE_NAME,
  PREDEFINE_PARTYGENDER_NAME,
  PREDEFINE_VEHICLETYPE_NAME,
  PREDEFINE_VEHICLEMODEL_NAME,
  PREDEFINE_VEHICLEMAKE_NAME,
  PREDEFINE_VEHICLESTATUS_NAME,
  PREDEFINE_VEHICLE_NAME,
  PREDEFINE_EVENTGROUP_NAME,
  PREDEFINE_EVENTTYPE_NAME,
  PREDEFINE_EVENTFUNCTION_NAME,
  PREDEFINE_EVENTACTION_NAME,
  PREDEFINE_EVENTQUESTION_NAME,
  PREDEFINE_ADMINISTRATIVEAREA_NAME,
  PREDEFINE_FEATURE_NAME,
  PREDEFINE_EVENTACTIONCATALOGUE_NAME,
  PREDEFINE_NOTIFICATIONTEMPLATE_NAME,
  PREDEFINE_DEFAULTS,
  // relations
  PARTY_RELATIONS,
  EVENT_RELATIONS,
  EVENT_CHANGELOG_RELATIONS,
  VEHICLE_DISPATCH_RELATIONS,
  // population
  POPULATION_MAX_DEPTH,
  POPULATION_DEFAULT,
  OPTION_PARTY_AUTOPOPULATE,
  OPTION_PERMISSION_AUTOPOPULATE,
} from '../src';

describe('internals', () => {
  it('should expose model names', () => {
    expect(MODEL_NAME_PREDEFINE).to.be.equal('Predefine');
    expect(MODEL_NAME_UNIT).to.be.equal('Predefine');
    expect(MODEL_NAME_PRIORITY).to.be.equal('Predefine');
    expect(MODEL_NAME_ADMINISTRATIVELEVEL).to.be.equal('Predefine');
    expect(MODEL_NAME_FEATURETYPE).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTINDICATOR).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTTOPIC).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTLEVEL).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTSEVERITY).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTCERTAINTY).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTSTATUS).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTURGENCY).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTRESPONSE).to.be.equal('Predefine');
    expect(MODEL_NAME_PARTYOWNERSHIP).to.be.equal('Predefine');
    expect(MODEL_NAME_PARTYGROUP).to.be.equal('Predefine');
    expect(MODEL_NAME_PARTYROLE).to.be.equal('Predefine');
    expect(MODEL_NAME_PARTYGENDER).to.be.equal('Predefine');
    expect(MODEL_NAME_VEHICLETYPE).to.be.equal('Predefine');
    expect(MODEL_NAME_VEHICLEMODEL).to.be.equal('Predefine');
    expect(MODEL_NAME_VEHICLEMAKE).to.be.equal('Predefine');
    expect(MODEL_NAME_VEHICLESTATUS).to.be.equal('Predefine');
    expect(MODEL_NAME_VEHICLE).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTGROUP).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTTYPE).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTFUNCTION).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTACTION).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTQUESTION).to.be.equal('Predefine');
    expect(MODEL_NAME_PERMISSION).to.be.equal('Permission');
    expect(MODEL_NAME_ROLE).to.be.equal('Predefine');
    expect(MODEL_NAME_ADMINISTRATIVEAREA).to.be.equal('Predefine');
    expect(MODEL_NAME_PARTY).to.be.equal('Party');
    expect(MODEL_NAME_FEATURE).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTACTIONCATALOGUE).to.be.equal('Predefine');
    expect(MODEL_NAME_NOTIFICATIONTEMPLATE).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENT).to.be.equal('Event');
    expect(MODEL_NAME_EVENTCHANGELOG).to.be.equal('EventChangeLog');
    expect(MODEL_NAME_VEHICLEDISPATCH).to.be.equal('VehicleDispatch');
  });

  it('should expose collection names', () => {
    expect(COLLECTION_NAME_PREDEFINE).to.be.equal('predefines');
    expect(COLLECTION_NAME_UNIT).to.be.equal('predefines');
    expect(COLLECTION_NAME_PRIORITY).to.be.equal('predefines');
    expect(COLLECTION_NAME_ADMINISTRATIVELEVEL).to.be.equal('predefines');
    expect(COLLECTION_NAME_FEATURETYPE).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTINDICATOR).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTTOPIC).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTLEVEL).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTSEVERITY).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTCERTAINTY).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTSTATUS).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTURGENCY).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTRESPONSE).to.be.equal('predefines');
    expect(COLLECTION_NAME_PARTYOWNERSHIP).to.be.equal('predefines');
    expect(COLLECTION_NAME_PARTYGROUP).to.be.equal('predefines');
    expect(COLLECTION_NAME_PARTYROLE).to.be.equal('predefines');
    expect(COLLECTION_NAME_PARTYGENDER).to.be.equal('predefines');
    expect(COLLECTION_NAME_VEHICLETYPE).to.be.equal('predefines');
    expect(COLLECTION_NAME_VEHICLEMODEL).to.be.equal('predefines');
    expect(COLLECTION_NAME_VEHICLEMAKE).to.be.equal('predefines');
    expect(COLLECTION_NAME_VEHICLESTATUS).to.be.equal('predefines');
    expect(COLLECTION_NAME_VEHICLE).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTGROUP).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTTYPE).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTFUNCTION).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTACTION).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTQUESTION).to.be.equal('predefines');
    expect(COLLECTION_NAME_PERMISSION).to.be.equal('permissions');
    expect(COLLECTION_NAME_ROLE).to.be.equal('predefines');
    expect(COLLECTION_NAME_ADMINISTRATIVEAREA).to.be.equal('predefines');
    expect(COLLECTION_NAME_PARTY).to.be.equal('parties');
    expect(COLLECTION_NAME_FEATURE).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTACTIONCATALOGUE).to.be.equal('predefines');
    expect(COLLECTION_NAME_NOTIFICATIONTEMPLATE).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENT).to.be.equal('events');
    expect(COLLECTION_NAME_EVENTCHANGELOG).to.be.equal('eventchangelogs');
    expect(COLLECTION_NAME_EVENTCHANGELOG).to.be.equal('eventchangelogs');
    expect(COLLECTION_NAME_VEHICLEDISPATCH).to.be.equal('vehicledispatches');
  });

  it('should expose predefine namespaces', () => {
    expect(PREDEFINE_NAMESPACE_UNIT).to.be.equal('Unit');
    expect(PREDEFINE_NAMESPACE_PRIORITY).to.be.equal('Priority');
    expect(PREDEFINE_NAMESPACE_ADMINISTRATIVELEVEL).to.be.equal(
      'AdministrativeLevel'
    );
    expect(PREDEFINE_NAMESPACE_FEATURETYPE).to.be.equal('FeatureType');
    expect(PREDEFINE_NAMESPACE_EVENTINDICATOR).to.be.equal('EventIndicator');
    expect(PREDEFINE_NAMESPACE_EVENTTOPIC).to.be.equal('EventTopic');
    expect(PREDEFINE_NAMESPACE_EVENTLEVEL).to.be.equal('EventLevel');
    expect(PREDEFINE_NAMESPACE_EVENTSEVERITY).to.be.equal('EventSeverity');
    expect(PREDEFINE_NAMESPACE_EVENTCERTAINTY).to.be.equal('EventCertainty');
    expect(PREDEFINE_NAMESPACE_EVENTSTATUS).to.be.equal('EventStatus');
    expect(PREDEFINE_NAMESPACE_EVENTURGENCY).to.be.equal('EventUrgency');
    expect(PREDEFINE_NAMESPACE_EVENTRESPONSE).to.be.equal('EventResponse');
    expect(PREDEFINE_NAMESPACE_PARTYOWNERSHIP).to.be.equal('PartyOwnership');
    expect(PREDEFINE_NAMESPACE_PARTYGROUP).to.be.equal('PartyGroup');
    expect(PREDEFINE_NAMESPACE_PARTYROLE).to.be.equal('PartyRole');
    expect(PREDEFINE_NAMESPACE_PARTYGENDER).to.be.equal('PartyGender');
    expect(PREDEFINE_NAMESPACE_VEHICLETYPE).to.be.equal('VehicleType');
    expect(PREDEFINE_NAMESPACE_VEHICLEMODEL).to.be.equal('VehicleModel');
    expect(PREDEFINE_NAMESPACE_VEHICLEMAKE).to.be.equal('VehicleMake');
    expect(PREDEFINE_NAMESPACE_VEHICLESTATUS).to.be.equal('VehicleStatus');
    expect(PREDEFINE_NAMESPACE_VEHICLE).to.be.equal('Vehicle');
    expect(PREDEFINE_NAMESPACE_EVENTGROUP).to.be.equal('EventGroup');
    expect(PREDEFINE_NAMESPACE_EVENTTYPE).to.be.equal('EventType');
    expect(PREDEFINE_NAMESPACE_EVENTFUNCTION).to.be.equal('EventFunction');
    expect(PREDEFINE_NAMESPACE_EVENTACTION).to.be.equal('EventAction');
    expect(PREDEFINE_NAMESPACE_EVENTQUESTION).to.be.equal('EventQuestion');
    expect(PREDEFINE_NAMESPACE_ROLE).to.be.equal('Role');
    expect(PREDEFINE_NAMESPACE_ADMINISTRATIVEAREA).to.be.equal(
      'AdministrativeArea'
    );
    expect(PREDEFINE_NAMESPACE_FEATURE).to.be.equal('Feature');
    expect(PREDEFINE_NAMESPACE_EVENTACTIONCATALOGUE).to.be.equal(
      'EventActionCatalogue'
    );
    expect(PREDEFINE_NAMESPACE_NOTIFICATIONTEMPLATE).to.be.equal(
      'NotificationTemplate'
    );
    expect(PREDEFINE_NAMESPACES).to.be.eql([
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
      PREDEFINE_NAMESPACE_PARTYOWNERSHIP,
      PREDEFINE_NAMESPACE_PARTYGROUP,
      PREDEFINE_NAMESPACE_PARTYROLE,
      PREDEFINE_NAMESPACE_PARTYGENDER,
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
    ]);
  });

  it('should expose predefine buckets', () => {
    expect(PREDEFINE_BUCKET_UNIT).to.be.equal('units');
    expect(PREDEFINE_BUCKET_PRIORITY).to.be.equal('priorities');
    expect(PREDEFINE_BUCKET_ADMINISTRATIVELEVEL).to.be.equal(
      'administrativelevels'
    );
    expect(PREDEFINE_BUCKET_FEATURETYPE).to.be.equal('featuretypes');
    expect(PREDEFINE_BUCKET_EVENTINDICATOR).to.be.equal('eventindicators');
    expect(PREDEFINE_BUCKET_EVENTTOPIC).to.be.equal('eventtopics');
    expect(PREDEFINE_BUCKET_EVENTLEVEL).to.be.equal('eventlevels');
    expect(PREDEFINE_BUCKET_EVENTSEVERITY).to.be.equal('eventseverities');
    expect(PREDEFINE_BUCKET_EVENTCERTAINTY).to.be.equal('eventcertainties');
    expect(PREDEFINE_BUCKET_EVENTSTATUS).to.be.equal('eventstatuses');
    expect(PREDEFINE_BUCKET_EVENTURGENCY).to.be.equal('eventurgencies');
    expect(PREDEFINE_BUCKET_EVENTRESPONSE).to.be.equal('eventresponses');
    expect(PREDEFINE_BUCKET_PARTYOWNERSHIP).to.be.equal('partyownerships');
    expect(PREDEFINE_BUCKET_PARTYGROUP).to.be.equal('partygroups');
    expect(PREDEFINE_BUCKET_PARTYROLE).to.be.equal('partyroles');
    expect(PREDEFINE_BUCKET_PARTYGENDER).to.be.equal('partygenders');
    expect(PREDEFINE_BUCKET_VEHICLETYPE).to.be.equal('vehicletypes');
    expect(PREDEFINE_BUCKET_VEHICLEMODEL).to.be.equal('vehiclemodels');
    expect(PREDEFINE_BUCKET_VEHICLEMAKE).to.be.equal('vehiclemakes');
    expect(PREDEFINE_BUCKET_VEHICLESTATUS).to.be.equal('vehiclestatuses');
    expect(PREDEFINE_BUCKET_VEHICLE).to.be.equal('vehicles');
    expect(PREDEFINE_BUCKET_EVENTGROUP).to.be.equal('eventgroups');
    expect(PREDEFINE_BUCKET_EVENTTYPE).to.be.equal('eventtypes');
    expect(PREDEFINE_BUCKET_EVENTFUNCTION).to.be.equal('eventfunctions');
    expect(PREDEFINE_BUCKET_EVENTACTION).to.be.equal('eventactions');
    expect(PREDEFINE_BUCKET_EVENTQUESTION).to.be.equal('eventquestions');
    expect(PREDEFINE_BUCKET_ROLE).to.be.equal('role');
    expect(PREDEFINE_BUCKET_ADMINISTRATIVEAREA).to.be.equal(
      'administrativeareas'
    );
    expect(PREDEFINE_BUCKET_FEATURE).to.be.equal('features');
    expect(PREDEFINE_BUCKET_EVENTACTIONCATALOGUE).to.be.equal(
      'eventcatalogues'
    );
    expect(PREDEFINE_BUCKET_NOTIFICATIONTEMPLATE).to.be.equal(
      'notificationtemplates'
    );
    expect(PREDEFINE_BUCKETS).to.be.eql([
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
      PREDEFINE_BUCKET_PARTYOWNERSHIP,
      PREDEFINE_BUCKET_PARTYGROUP,
      PREDEFINE_BUCKET_PARTYROLE,
      PREDEFINE_BUCKET_PARTYGENDER,
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
    ]);
  });

  it('should expose path names', () => {
    expect(PATH_NAME_UNIT).to.be.equal('unit');
    expect(PATH_NAME_PRIORITY).to.be.equal('priority');
    expect(PATH_NAME_ADMINISTRATIVELEVEL).to.be.equal('level');
    expect(PATH_NAME_FEATURETYPE).to.be.equal('type');
    expect(PATH_NAME_EVENTINDICATOR).to.be.equal('indicator');
    expect(PATH_NAME_EVENTTOPIC).to.be.equal('topic');
    expect(PATH_NAME_EVENTLEVEL).to.be.equal('level');
    expect(PATH_NAME_EVENTSEVERITY).to.be.equal('severity');
    expect(PATH_NAME_EVENTCERTAINTY).to.be.equal('certainty');
    expect(PATH_NAME_EVENTSTATUS).to.be.equal('status');
    expect(PATH_NAME_EVENTURGENCY).to.be.equal('urgency');
    expect(PATH_NAME_EVENTRESPONSE).to.be.equal('response');
    expect(PATH_NAME_PARTYGROUP).to.be.equal('group');
    expect(PATH_NAME_PARTYOWNERSHIP).to.be.equal('ownership');
    expect(PATH_NAME_PARTYGROUPS).to.be.equal('groups');
    expect(PATH_NAME_PARTYROLE).to.be.equal('role');
    expect(PATH_NAME_PARTYROLES).to.be.equal('roles');
    expect(PATH_NAME_PARTYGENDER).to.be.equal('gender');
    expect(PATH_NAME_VEHICLETYPE).to.be.equal('type');
    expect(PATH_NAME_VEHICLEMODEL).to.be.equal('model');
    expect(PATH_NAME_VEHICLEMAKE).to.be.equal('make');
    expect(PATH_NAME_VEHICLESTATUS).to.be.equal('status');
    expect(PATH_NAME_VEHICLE).to.be.equal('vehicle');
    expect(PATH_NAME_EVENTGROUP).to.be.equal('group');
    expect(PATH_NAME_EVENTGROUPS).to.be.equal('groups');
    expect(PATH_NAME_EVENTTYPE).to.be.equal('type');
    expect(PATH_NAME_EVENTFUNCTION).to.be.equal('function');
    expect(PATH_NAME_EVENTACTION).to.be.equal('action');
    expect(PATH_NAME_EVENTQUESTION).to.be.equal('question');
    expect(PATH_NAME_EVENTQUESTION_NEED).to.be.equal('need');
    expect(PATH_NAME_EVENTQUESTION_EFFECT).to.be.equal('effect');
    expect(PATH_NAME_PERMISSIONS).to.be.equal('permissions');
    expect(PATH_NAME_ROLE).to.be.equal('role');
    expect(PATH_NAME_ROLES).to.be.equal('roles');
    expect(PATH_NAME_ADMINISTRATIVEAREA).to.be.equal('area');
    expect(PATH_NAME_ADMINISTRATIVEAREAS).to.be.equal('areas');
    expect(PATH_NAME_PARTY).to.be.equal('party');
    expect(PATH_NAME_PARTY_FOCAL).to.be.equal('focal');
    expect(PATH_NAME_PARTY_FOCALS).to.be.equal('focals');
    expect(PATH_NAME_PARTY_AGENCY).to.be.equal('agency');
    expect(PATH_NAME_PARTY_AGENCIES).to.be.equal('agencies');
    expect(PATH_NAME_PARTY_CUSTODIAN).to.be.equal('custodian');
    expect(PATH_NAME_PARTY_CUSTODIANS).to.be.equal('custodians');
    expect(PATH_NAME_FEATURE).to.be.equal('feature');
    expect(PATH_NAME_NOTIFICATIONTEMPLATE).to.be.equal('template');
    expect(PATH_NAME_EVENT).to.be.equal('event');
    expect(PATH_NAME_EVENTCHANGELOG).to.be.equal('changelog');
    expect(PATH_NAME_EVENTCHANGELOGS).to.be.equal('changelogs');
  });

  it('should expose predefine default names', () => {
    // default names
    expect(PREDEFINE_UNIT_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_PRIORITY_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_ADMINISTRATIVELEVEL_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_FEATURETYPE_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_EVENTINDICATOR_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_EVENTTOPIC_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_EVENTLEVEL_NAME).to.be.equal('White');
    expect(PREDEFINE_EVENTSEVERITY_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_EVENTCERTAINTY_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_EVENTSTATUS_NAME).to.be.equal('Actual');
    expect(PREDEFINE_EVENTURGENCY_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_EVENTRESPONSE_NAME).to.be.equal('None');
    expect(PREDEFINE_PARTYOWNERSHIP_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_PARTYGROUP_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_PARTYROLE_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_PARTYGENDER_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_VEHICLETYPE_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_VEHICLEMODEL_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_VEHICLEMAKE_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_VEHICLESTATUS_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_VEHICLE_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_EVENTGROUP_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_EVENTTYPE_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_EVENTFUNCTION_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_EVENTACTION_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_EVENTQUESTION_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_ADMINISTRATIVEAREA_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_FEATURE_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_EVENTACTIONCATALOGUE_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_NOTIFICATIONTEMPLATE_NAME).to.be.equal('Unknown');
    expect(PREDEFINE_DEFAULTS).to.be.eql({
      Unit: 'Unknown',
      Priority: 'Unknown',
      AdministrativeLevel: 'Unknown',
      FeatureType: 'Unknown',
      EventIndicator: 'Unknown',
      EventTopic: 'Unknown',
      EventLevel: 'White',
      EventSeverity: 'Unknown',
      EventCertainty: 'Unknown',
      EventStatus: 'Actual',
      EventUrgency: 'Unknown',
      EventResponse: 'None',
      PartyOwnership: 'Unknown',
      PartyGroup: 'Unknown',
      PartyRole: 'Unknown',
      PartyGender: 'Unknown',
      VehicleModel: 'Unknown',
      VehicleType: 'Unknown',
      VehicleMake: 'Unknown',
      VehicleStatus: 'Unknown',
      Vehicle: 'Unknown',
      EventGroup: 'Unknown',
      EventType: 'Unknown',
      EventFunction: 'Unknown',
      EventAction: 'Unknown',
      EventQuestion: 'Unknown',
      AdministrativeArea: 'Unknown',
      EventActionCatalogue: 'Unknown',
      NotificationTemplate: 'Unknown',
    });
  });

  it('should expose predefine relations definition', () => {
    expect(PREDEFINE_RELATIONS).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.parent).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.permissions).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.roles).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.groups).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.group).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.type).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.function).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.action).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.level).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.area).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.indicator).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.topic).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.unit).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.model).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.make).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.status).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.priority).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.ownership).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.owner).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.focals).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.agencies).to.exist.and.be.an('object');
    expect(PREDEFINE_RELATIONS.custodians).to.exist.and.be.an('object');
  });

  it('should expose party relations definition', () => {
    expect(PARTY_RELATIONS).to.exist.and.be.an('object');
    expect(PARTY_RELATIONS.party).to.exist.and.be.an('object');
    expect(PARTY_RELATIONS.agency).to.exist.and.be.an('object');
    expect(PARTY_RELATIONS.group).to.exist.and.be.an('object');
    expect(PARTY_RELATIONS.level).to.exist.and.be.an('object');
    expect(PARTY_RELATIONS.area).to.exist.and.be.an('object');
    expect(PARTY_RELATIONS.ownership).to.exist.and.be.an('object');
    expect(PARTY_RELATIONS.role).to.exist.and.be.an('object');
    expect(PARTY_RELATIONS.gender).to.exist.and.be.an('object');
  });

  it('should expose event relations definition', () => {
    expect(EVENT_RELATIONS).to.exist.and.be.an('object');
    expect(EVENT_RELATIONS.group).to.exist.and.be.an('object');
    expect(EVENT_RELATIONS.type).to.exist.and.be.an('object');
    expect(EVENT_RELATIONS.level).to.exist.and.be.an('object');
    expect(EVENT_RELATIONS.severity).to.exist.and.be.an('object');
    expect(EVENT_RELATIONS.certainty).to.exist.and.be.an('object');
    expect(EVENT_RELATIONS.status).to.exist.and.be.an('object');
    expect(EVENT_RELATIONS.urgency).to.exist.and.be.an('object');
    expect(EVENT_RELATIONS.response).to.exist.and.be.an('object');
    expect(EVENT_RELATIONS.areas).to.exist.and.be.an('object');
    expect(EVENT_RELATIONS.agencies).to.exist.and.be.an('object');
    expect(EVENT_RELATIONS.focals).to.exist.and.be.an('object');
  });

  it('should expose event changelog relations definition', () => {
    expect(EVENT_CHANGELOG_RELATIONS).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.initiator).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.verifier).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.group).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.type).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.level).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.severity).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.certainty).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.status).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.urgency).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.response).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.event).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.function).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.action).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.catalogue).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.indicator).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.topic).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.question).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.need).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.effect).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.unit).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.areas).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.groups).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.roles).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.agencies).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.focals).to.exist.and.be.an('object');
    expect(EVENT_CHANGELOG_RELATIONS.template).to.exist.and.be.an('object');
  });

  it('should expose vehicle dispatch relations definition', () => {
    expect(VEHICLE_DISPATCH_RELATIONS).to.exist.and.be.an('object');
    expect(VEHICLE_DISPATCH_RELATIONS.group).to.exist.and.be.an('object');
    expect(VEHICLE_DISPATCH_RELATIONS.type).to.exist.and.be.an('object');
    expect(VEHICLE_DISPATCH_RELATIONS.event).to.exist.and.be.an('object');
    expect(VEHICLE_DISPATCH_RELATIONS['requester.facility']).to.exist.and.be.an(
      'object'
    );
    expect(VEHICLE_DISPATCH_RELATIONS['requester.area']).to.exist.and.be.an(
      'object'
    );
    expect(VEHICLE_DISPATCH_RELATIONS['victim.gender']).to.exist.and.be.an(
      'object'
    );
    expect(VEHICLE_DISPATCH_RELATIONS['victim.area']).to.exist.and.be.an(
      'object'
    );
    expect(VEHICLE_DISPATCH_RELATIONS['pickup.facility']).to.exist.and.be.an(
      'object'
    );
    expect(VEHICLE_DISPATCH_RELATIONS['requester.area']).to.exist.and.be.an(
      'object'
    );
    expect(VEHICLE_DISPATCH_RELATIONS['dropoff.facility']).to.exist.and.be.an(
      'object'
    );
    expect(VEHICLE_DISPATCH_RELATIONS['dropoff.area']).to.exist.and.be.an(
      'object'
    );
    expect(VEHICLE_DISPATCH_RELATIONS['carrier.type']).to.exist.and.be.an(
      'object'
    );
    expect(VEHICLE_DISPATCH_RELATIONS['carrier.owner']).to.exist.and.be.an(
      'object'
    );
    expect(VEHICLE_DISPATCH_RELATIONS['carrier.ownership']).to.exist.and.be.an(
      'object'
    );
    expect(VEHICLE_DISPATCH_RELATIONS['carrier.vehicle']).to.exist.and.be.an(
      'object'
    );
    expect(VEHICLE_DISPATCH_RELATIONS.crew).to.exist.and.be.an('object');
    expect(VEHICLE_DISPATCH_RELATIONS.status).to.exist.and.be.an('object');
    expect(VEHICLE_DISPATCH_RELATIONS.priority).to.exist.and.be.an('object');
    expect(VEHICLE_DISPATCH_RELATIONS.reporter).to.exist.and.be.an('object');
    expect(VEHICLE_DISPATCH_RELATIONS.dispatcher).to.exist.and.be.an('object');
    expect(VEHICLE_DISPATCH_RELATIONS.canceler).to.exist.and.be.an('object');
    expect(VEHICLE_DISPATCH_RELATIONS.resolver).to.exist.and.be.an('object');
    expect(VEHICLE_DISPATCH_RELATIONS.status).to.exist.and.be.an('object');
  });

  it('should expose population options', () => {
    expect(POPULATION_MAX_DEPTH).to.be.equal(1);
    expect(POPULATION_DEFAULT).to.be.eql({ maxDepth: POPULATION_MAX_DEPTH });
    expect(OPTION_PARTY_AUTOPOPULATE).to.be.eql({
      select: { name: 1, email: 1, mobile: 1, abbreviation: 1 },
      maxDepth: POPULATION_MAX_DEPTH,
    });
    expect(OPTION_PERMISSION_AUTOPOPULATE).to.be.eql({
      select: { resource: 1, action: 1, wildcard: 1 },
      maxDepth: POPULATION_MAX_DEPTH,
    });
  });

  it('should set predefine namespaces', () => {
    expect(process.env.PREDEFINE_NAMESPACES).to.exist;
    expect(getStrings('PREDEFINE_NAMESPACES')).to.be.eql(PREDEFINE_NAMESPACES);
  });

  it('should set predefine ignored relations', () => {
    expect(process.env.PREDEFINE_RELATIONS_IGNORED).to.exist;
    expect(getStrings('PREDEFINE_RELATIONS_IGNORED')).to.be.eql(
      PREDEFINE_NAMESPACES
    );
  });

  it('should set predefine relations', () => {
    expect(process.env.PREDEFINE_RELATIONS).to.exist;
    expect(getObject('PREDEFINE_RELATIONS')).to.eql(PREDEFINE_RELATIONS);
  });
});
