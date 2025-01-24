const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[90vw] xl:max-w-[80vw] mx-auto">
      {children}
    </div>
  );
};

export default Container;
