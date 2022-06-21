import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
// import { Linking } from 'react-native';
// import Input from '../elements/Input';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
            Feel free to contact me now: 
              </h3>
          </div>
          <div className="reveal-from-bottom" data-reveal-delay="150">
          <ButtonGroup>
                  <Button tag="a" color="success" wideMobile href="https://www.linkedin.com/in/ilan-scher-a42763236/" target="_blank">
                    View on linkedin
              </Button>
              {/* <Button onPress={() => Linking.openURL('mailto:ilan61300@gmail.com?subject=SendMail&body=We are interested about tour profile') }
                title="ilan61300@gmail.com">
              </Button> */}
                  <Button tag="a" color="dark" wideMobile>
                    ilan61300@gmail.com
              </Button>
                  <Button tag="a" href="tel:0528109521" color="success" wideMobile>
                    052-810-9521
                    </Button>
                </ButtonGroup>
              </div>
          {/* <div className="cta-action">
            <Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Your best email">
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>
          </div> */}
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;