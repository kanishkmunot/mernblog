import React from 'react'
import {Footer, FooterCopyright, FooterDivider} from 'flowbite-react'
import {Link} from 'react-router-dom'
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble} from 'react-icons/bs'

function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
            <div className='mt-5'>
            <Link 
            to="/" 
            className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>

            <span className='px-2 py-2 bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 rounded-lg text-white'>Kanishk's Blog
            </span>
           </Link>
            </div>
            <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                <div>
                <Footer.Title title='About'/>
                <Footer.LinkGroup col>
                    <Footer.Link
                        href='https://www.linkedin.com/in/kanishk-munot-11b34b24b/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                      Kanishk Munot
                    </Footer.Link>
                    <Footer.Link
                        href='/about'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                      Kanishk's Blog
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title='Follow me'/>
                <Footer.LinkGroup col>
                    <Footer.Link
                        href='https://github.com/kanishkmunot'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                      Github
                    </Footer.Link>
                    <Footer.Link
                        href='https://kanishkmunot.hashnode.dev/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                      Hashnode
                    </Footer.Link>
                    <Footer.Link
                        href='https://twitter.com/kanishk_munot'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                      Twitter
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title='Legal'/>
                <Footer.LinkGroup col>
                    <Footer.Link
                        href='https://en.wikipedia.org/wiki/Privacy_policy'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                      Privacy Policy
                    </Footer.Link>
                    <Footer.Link
                        href='/about'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                      Terms &amp; Conditions
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
            </div>
        </div>
        <FooterDivider/>
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright
              href='#'
              by="Kanishk's blog"
              year={new Date().getFullYear()}
              />
              <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                <Footer.Icon href='#' icon={BsFacebook}/>
                <Footer.Icon href='#' icon={BsInstagram}/>
                <Footer.Icon href='https://github.com/kanishkmunot' icon={BsGithub}/>
                <Footer.Icon href='#' icon={BsTwitter}/>
                <Footer.Icon href='#' icon={BsDribbble}/>
              </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterCom