import { expect } from '@lykmapipo/test-helpers';
import {
  // models
  MODEL_NAME_EVENT,
  // collections
  COLLECTION_NAME_EVENT,
  // paths
  PATH_NAME_EVENT,
} from '../src';

describe('internals', () => {
  it('should expose models name', () => {
    expect(MODEL_NAME_EVENT).to.be.equal('Event');
  });

  it('should expose collection names', () => {
    expect(COLLECTION_NAME_EVENT).to.be.equal('events');
  });

  it('should expose path names', () => {
    expect(PATH_NAME_EVENT).to.be.equal('event');
  });
});
