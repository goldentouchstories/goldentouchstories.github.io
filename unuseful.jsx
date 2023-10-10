<Disclosure as="nav" className="bg-gray-800 items-center">
  {({ open }) => (
    <>
      <div className="px-2 sm:px-6 lg:px-8 flex items-center justify-center w-full">
        <div className="flex items-center justify-center">
          <div className="w-2/12 sm:w-1/6 md:w-1/6">
            <Image
              src={logo}
              alt="Golden Touch Stories Logo"
              className="max-w-full h-auto"
            />
          </div>
          <div className="hidden sm:ml-8 text-center sm:block">
            <h1 className="text-white text-2xl font-bold pt-2 mb-2 sm:text-3xl">
              Goldentouchstories
            </h1>
            <div className="flex justify-center space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium sm:text-base'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center pr-2 md:hidden sm:hidden ">
          {/* Mobile menu button*/}
          <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            {open ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </Disclosure.Button>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>;
