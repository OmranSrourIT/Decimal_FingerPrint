using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Decimal_FingerPrint.Startup))]
namespace Decimal_FingerPrint
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
