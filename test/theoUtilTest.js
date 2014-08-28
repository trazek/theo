/*
Copyright (c) 2014, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var should = require('should');
var assert = require('assert');
var theoUtil = require('./../lib/theoUtil');

describe('theoUtil', function(){

  describe('camelCase', function(){
    it('should convert camelCase a given string.', function(){
      theoUtil.camelCase('FOO_BAR').should.equal('fooBar');
      theoUtil.camelCase('FOO-BAR').should.equal('fooBar');
    });
  });

  describe('dasherize', function(){
    it('should added dashes to given string.', function(){
      theoUtil.dasherize('FOO_BAR').should.equal('foo-bar');
      theoUtil.dasherize('FOO-BAR').should.equal('foo-bar');
    });
  });

  describe('hex2rgba', function(){
    it('should convert a hex value without prefix to rgba.', function(){
      theoUtil.hex2rgba('ffffff').should.equal('rgba(255,255,255,1)');
    });

    xit('should convert a hex value to rgba.', function(){
      theoUtil.hex2rgba('#ffffff').should.equal('rgba(255,255,255,1)');
    });

    xit('should convert a hex value with alpha info to rgba.', function(){
      theoUtil.hex2rgba('#ffffff80').should.equal('rgba(255,255,255,.5)');
    });
  });

});