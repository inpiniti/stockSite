<template>
  <div class="flex flex-col p-4 gap-4">
    <CommonHeader title="책 차트" description="책의 차트를 보여줍니다." />
    <Tabs default-value="account" class="w-full">
      <TabsList>
        <TabsTrigger value="account1"> 이번주 </TabsTrigger>
        <TabsTrigger value="account"> 이번달 </TabsTrigger>
        <TabsTrigger value="password"> 올해 </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div class="w-full grid grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>가장 인기있는 만화책</CardTitle>
              <CardDescription>6주간 판매량이 가장 높은 만화책</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="font-bold text-4xl">장송의 프리렌</div>
            </CardContent>
            <CardFooter>
              장송의 프리렌은 약 342,200 권 판매되었습니다.
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent> Card Content </CardContent>
            <CardFooter> Card Footer </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent> Card Content </CardContent>
            <CardFooter> Card Footer </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent> Card Content </CardContent>
            <CardFooter> Card Footer </CardFooter>
          </Card>
          <div></div>
        </div>
      </TabsContent>
      <TabsContent value="password"> Change your password here. </TabsContent>
      <TabsContent value="password"> Change your password here. </TabsContent>
    </Tabs>
  </div>
</template>
