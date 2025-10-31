"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:49217018009233197704 LICENSE.md

const {expect} = require('chai')
const PoliceDeva = require('./index.js');

describe(PoliceDeva.me.name, () => {
  beforeEach(() => {
    return PoliceDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(PoliceDeva).to.be.an('object');
    expect(PoliceDeva).to.have.property('agent');
    expect(PoliceDeva).to.have.property('vars');
    expect(PoliceDeva).to.have.property('listeners');
    expect(PoliceDeva).to.have.property('methods');
    expect(PoliceDeva).to.have.property('modules');
  });
})
