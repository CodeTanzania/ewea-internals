import { expect } from '@lykmapipo/test-helpers';
import {
  // models
  MODEL_NAME_PREDEFINE,
  MODEL_NAME_UNIT,
  MODEL_NAME_ADMINISTRATIVELEVEL,
  MODEL_NAME_FEATURETYPE,
  MODEL_NAME_EVENTINDICATOR,
  MODEL_NAME_EVENTSEVERITY,
  MODEL_NAME_EVENTCERTAINTY,
  MODEL_NAME_PARTYGROUP,
  MODEL_NAME_PARTYROLE,
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
  MODEL_NAME_EVENTCATALOGUE,
  MODEL_NAME_NOTIFICATIONTEMPLATE,
  MODEL_NAME_EVENT,
  MODEL_NAME_EVENTCHANGELOG,
  // collections
  COLLECTION_NAME_PREDEFINE,
  COLLECTION_NAME_UNIT,
  COLLECTION_NAME_ADMINISTRATIVELEVEL,
  COLLECTION_NAME_FEATURETYPE,
  COLLECTION_NAME_EVENTINDICATOR,
  COLLECTION_NAME_EVENTSEVERITY,
  COLLECTION_NAME_EVENTCERTAINTY,
  COLLECTION_NAME_PARTYGROUP,
  COLLECTION_NAME_PARTYROLE,
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
  COLLECTION_NAME_EVENTCATALOGUE,
  COLLECTION_NAME_NOTIFICATIONTEMPLATE,
  COLLECTION_NAME_EVENT,
  COLLECTION_NAME_EVENTCHANGELOG,
  // namespaces
  PREDEFINE_NAMESPACE_UNIT,
  PREDEFINE_NAMESPACE_ADMINISTRATIVELEVEL,
  PREDEFINE_NAMESPACE_FEATURETYPE,
  PREDEFINE_NAMESPACE_EVENTINDICATOR,
  PREDEFINE_NAMESPACE_EVENTSEVERITY,
  PREDEFINE_NAMESPACE_EVENTCERTAINTY,
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
  PREDEFINE_NAMESPACE_EVENTCATALOGUE,
  PREDEFINE_NAMESPACE_NOTIFICATIONTEMPLATE,
  PREDEFINE_NAMESPACES,
  // buckets
  PREDEFINE_BUCKET_UNIT,
  PREDEFINE_BUCKET_ADMINISTRATIVELEVEL,
  PREDEFINE_BUCKET_FEATURETYPE,
  PREDEFINE_BUCKET_EVENTINDICATOR,
  PREDEFINE_BUCKET_EVENTSEVERITY,
  PREDEFINE_BUCKET_EVENTCERTAINTY,
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
  PREDEFINE_BUCKET_EVENTCATALOGUE,
  PREDEFINE_BUCKET_NOTIFICATIONTEMPLATE,
  PREDEFINE_BUCKETS,
  // paths
  PATH_NAME_EVENT,
} from '../src';

describe('internals', () => {
  it('should expose model names', () => {
    expect(MODEL_NAME_PREDEFINE).to.be.equal('Predefine');
    expect(MODEL_NAME_UNIT).to.be.equal('Predefine');
    expect(MODEL_NAME_ADMINISTRATIVELEVEL).to.be.equal('Predefine');
    expect(MODEL_NAME_FEATURETYPE).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTINDICATOR).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTSEVERITY).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENTCERTAINTY).to.be.equal('Predefine');
    expect(MODEL_NAME_PARTYGROUP).to.be.equal('Predefine');
    expect(MODEL_NAME_PARTYROLE).to.be.equal('Predefine');
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
    expect(MODEL_NAME_EVENTCATALOGUE).to.be.equal('Predefine');
    expect(MODEL_NAME_NOTIFICATIONTEMPLATE).to.be.equal('Predefine');
    expect(MODEL_NAME_EVENT).to.be.equal('Event');
    expect(MODEL_NAME_EVENTCHANGELOG).to.be.equal('EventChangeLog');
  });

  it('should expose collection names', () => {
    expect(COLLECTION_NAME_PREDEFINE).to.be.equal('predefines');
    expect(COLLECTION_NAME_UNIT).to.be.equal('predefines');
    expect(COLLECTION_NAME_ADMINISTRATIVELEVEL).to.be.equal('predefines');
    expect(COLLECTION_NAME_FEATURETYPE).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTINDICATOR).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTSEVERITY).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENTCERTAINTY).to.be.equal('predefines');
    expect(COLLECTION_NAME_PARTYGROUP).to.be.equal('predefines');
    expect(COLLECTION_NAME_PARTYROLE).to.be.equal('predefines');
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
    expect(COLLECTION_NAME_EVENTCATALOGUE).to.be.equal('predefines');
    expect(COLLECTION_NAME_NOTIFICATIONTEMPLATE).to.be.equal('predefines');
    expect(COLLECTION_NAME_EVENT).to.be.equal('events');
    expect(COLLECTION_NAME_EVENTCHANGELOG).to.be.equal('eventchangelogs');
    expect(COLLECTION_NAME_EVENTCHANGELOG).to.be.equal('eventchangelogs');
  });

  it('should expose predefine namespaces', () => {
    expect(PREDEFINE_NAMESPACE_UNIT).to.be.equal('Unit');
    expect(PREDEFINE_NAMESPACE_ADMINISTRATIVELEVEL).to.be.equal(
      'AdministrativeLevel'
    );
    expect(PREDEFINE_NAMESPACE_FEATURETYPE).to.be.equal('FeatureType');
    expect(PREDEFINE_NAMESPACE_EVENTINDICATOR).to.be.equal('EventIndicator');
    expect(PREDEFINE_NAMESPACE_EVENTSEVERITY).to.be.equal('EventSeverity');
    expect(PREDEFINE_NAMESPACE_EVENTCERTAINTY).to.be.equal('EventCertainty');
    expect(PREDEFINE_NAMESPACE_PARTYGROUP).to.be.equal('PartyGroup');
    expect(PREDEFINE_NAMESPACE_PARTYROLE).to.be.equal('PartyRole');
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
    expect(PREDEFINE_NAMESPACE_EVENTCATALOGUE).to.be.equal('EventCatalogue');
    expect(PREDEFINE_NAMESPACE_NOTIFICATIONTEMPLATE).to.be.equal(
      'NotificationTemplate'
    );
    expect(PREDEFINE_NAMESPACES).to.be.eql([
      PREDEFINE_NAMESPACE_UNIT,
      PREDEFINE_NAMESPACE_ADMINISTRATIVELEVEL,
      PREDEFINE_NAMESPACE_FEATURETYPE,
      PREDEFINE_NAMESPACE_EVENTINDICATOR,
      PREDEFINE_NAMESPACE_EVENTSEVERITY,
      PREDEFINE_NAMESPACE_EVENTCERTAINTY,
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
      PREDEFINE_NAMESPACE_EVENTCATALOGUE,
      PREDEFINE_NAMESPACE_NOTIFICATIONTEMPLATE,
    ]);
  });

  it('should expose predefine buckets', () => {
    expect(PREDEFINE_BUCKET_UNIT).to.be.equal('units');
    expect(PREDEFINE_BUCKET_ADMINISTRATIVELEVEL).to.be.equal(
      'administrativelevels'
    );
    expect(PREDEFINE_BUCKET_FEATURETYPE).to.be.equal('featuretypes');
    expect(PREDEFINE_BUCKET_EVENTINDICATOR).to.be.equal('eventindicators');
    expect(PREDEFINE_BUCKET_EVENTSEVERITY).to.be.equal('eventseverities');
    expect(PREDEFINE_BUCKET_EVENTCERTAINTY).to.be.equal('eventcertainties');
    expect(PREDEFINE_BUCKET_PARTYGROUP).to.be.equal('partygroups');
    expect(PREDEFINE_BUCKET_PARTYROLE).to.be.equal('partyroles');
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
    expect(PREDEFINE_BUCKET_EVENTCATALOGUE).to.be.equal('eventcatalogues');
    expect(PREDEFINE_BUCKET_NOTIFICATIONTEMPLATE).to.be.equal(
      'notificationtemplates'
    );
    expect(PREDEFINE_BUCKETS).to.be.eql([
      PREDEFINE_BUCKET_UNIT,
      PREDEFINE_BUCKET_ADMINISTRATIVELEVEL,
      PREDEFINE_BUCKET_FEATURETYPE,
      PREDEFINE_BUCKET_EVENTINDICATOR,
      PREDEFINE_BUCKET_EVENTSEVERITY,
      PREDEFINE_BUCKET_EVENTCERTAINTY,
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
      PREDEFINE_BUCKET_EVENTCATALOGUE,
      PREDEFINE_BUCKET_NOTIFICATIONTEMPLATE,
    ]);
  });

  it('should expose path names', () => {
    expect(PATH_NAME_EVENT).to.be.equal('event');
  });
});
