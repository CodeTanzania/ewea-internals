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
  });

  it('should expose path names', () => {
    expect(PATH_NAME_EVENT).to.be.equal('event');
  });
});
