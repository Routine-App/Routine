/*
 * This file is part of the Routine project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

function FooterComponent(props) {
  const { t: lang } = props;
  return (
    <div className="bg-white border-t" data-testid={props['data-testid']}>
      <div className="container mx-auto px-24">
        <div className="flex justify-between items-center text-sm">
          <div className="text-center md:text-left py-3 md:py-4 border-b md:border-b-0">
            <span className="no-underline text-gray-600 mr-4">
              {lang('Footer.component.license')}
              <a href="#" className="no-underline text-blue-400">
                {lang('Footer.component.author')}
              </a>
            </span>
          </div>
          <div className="md:flex md:flex-row-reverse items-center py-4">
            <div className="text-center mb-4 md:mb-0 md:flex">
              <div className="text-xl">
                <i
                  className="fa fa-github  text-gray-900 mr-2"
                  onClick={() => open('https://github.com/Routine-App/Routine')}
                />
                <i
                  className="fa fa-twitter text-blue-500 mr-2"
                  onClick={() => open('https://twitter.com/AmeurIdrissi')}
                />
              </div>
            </div>
            <div className="text-gray-600 text-center md:mr-4">
              {lang('Footer.component.copyright')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FooterComponent.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(FooterComponent);
