import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (event) => {
  return {
    session: await event.locals.getSession(),
    providers: await event.locals.getProviders(),
    callbackUrl: new URL(event.request.url).host,
  }
}
