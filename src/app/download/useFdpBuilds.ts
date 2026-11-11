import { useEffect, useState } from "react";
import { loadFdpBuilds, type FdpBuild } from "@/lib/fdp-builds";

export type FdpBuildState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; build: FdpBuild };

type FdpBuildStates = { forge: FdpBuildState; inject: FdpBuildState };

const LOADING: FdpBuildStates = {
  forge: { status: "loading" },
  inject: { status: "loading" },
};
const FAILED: FdpBuildStates = {
  forge: { status: "error" },
  inject: { status: "error" },
};

function settle(build: FdpBuild | null): FdpBuildState {
  return build ? { status: "ready", build } : { status: "error" };
}

export function useFdpBuilds(): FdpBuildStates {
  const [state, setState] = useState(LOADING);

  useEffect(() => {
    let active = true;
    loadFdpBuilds().then(
      (builds) => {
        if (active) {
          setState({
            forge: settle(builds.forge),
            inject: settle(builds.inject),
          });
        }
      },
      () => {
        if (active) setState(FAILED);
      }
    );
    return () => {
      active = false;
    };
  }, []);

  return state;
}
