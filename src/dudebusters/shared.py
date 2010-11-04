from tic import core
from tic.core import implements
from tic.web import cdp
from tic.web.cdp.api import ICommandHandler

class SayHi(cdp.Command):
    message = cdp.StringProperty()
    

class SayHiResult(cdp.Result):
    bla = cdp.StringProperty()

class SayHiHandler(core.Component):
    implements(ICommandHandler)
    command = SayHi
    
    def execute(self, command):
        r = SayHiResult()
        r.bla = command.message
        return r