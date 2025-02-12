<div>
  <h1>
    Huu Tai Dev
    &middot;
    <img src="https://img.shields.io/website?style=flat-square&url=https%3A%2F%2Fwww.genny.dev"/>
    <img src="https://img.shields.io/github/deployments/Huu Taidev/genny.dev/production?label=production&style=flat-square"/>
    <img src="https://img.shields.io/github/commit-activity/m/Huu Taidev/genny.dev?style=flat-square"/>
  </h1>
</div>

A monorepo for my personal website and projects, built with Turborepo and pnpm.

## 📘 [genny.dev](https://www.genny.dev)

A personal website with a blog, project showcase, and work information.

https://user-images.githubusercontent.com/95107212/210668021-fd49431f-85a3-4bd7-bf9e-09639cb38922.mp4

### Tech Stack

- 🚀 Next.js + TypeScript
- ➰ Framer Motion
- 🍃 Tailwind CSS
- ✍ MDX

### Running the Project

To get started, I recommend [installing pnpm](https://pnpm.io/installation) since it's the package manager used in this repository.

Begin by forking the repository and then cloning it to your local machine:

```
git clone <your-fork>
```

Navigate to the project's root directory:

```
cd ./genny.dev
```

Next, copy the development version of the `env` file:

```
cp ./apps/genny.dev/env.example ./apps/genny.dev/env.local
```

Now, you have the `env.local` file ready for configuration:

```
DATABASE_URL = your-database-connection-string
SALT_IP_ADDRESS = super-secret
```

For the `DATABASE_URL` use your database connection string. I personally use the free version of [MongoDB](https://www.mongodb.com/), and you can do the same by creating a database there and [adding the connection string](https://www.mongodb.com/basics/mongodb-connection-string) to the `env.local`.

As for `SALT_IP_ADDRESS`, feel free to fill it with some of your secret words. It acts as a salt for hashing users' IP addresses.

Once configuration is complete, still at the root of the project directory, install the required dependencies:

```
pnpm install
```

Finally, run the project:

```
pnpm dev
```

Now, your project should be up and running smoothly!
